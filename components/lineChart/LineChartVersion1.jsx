//CSS
import styled, {css} from "styled-components";
import { flex, colors } from '../../styles/partials'
//Charts
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState, useEffect, useRef } from 'react';

const Container = styled.section`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 60px;
    height: 100vh;
    width: 100%;
`
const ChartContainer = styled.div`
    position: relative;
    height: 80vh;
    width: 100%;
`
const ButtonContainer = styled.div`
  width: 100%;
  ${flex('row', 'center', 'center')};
  gap: 10px;
  flex-wrap: wrap;
`
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  ${fonts.footnote};
  background-color: white;
  color: ${colors.secondary};
  ${props => props.bio && css`
    background-color: ${colors.bio};
    color: white;
  `}
  ${props => props.fossil && css`
    background-color: ${colors.fossil};
    color: white;
  `}
  &.active {
    text-decoration: line-through;
    filter: brightness(90%);
  }
  &:hover {
    filter: brightness(90%);
  }
`

const LineChartVersion1 = ({ emissions }) => {

  const canvas = useRef()
  const [options, setOptions] = useState(ChartOptions())
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])
  const [bioEmissions, setBioEmissions] = useState(emissions.filter(emission => emission.type.val === 'CO2-BIO').filter(emission => emission.sector.val === '0.1'))
  const [fossilEmissions, setFossilEmissions] = useState(emissions.filter(emission => emission.type.val === 'CO2-ekv.').filter(emission => emission.sector.val === '0.1'))
  const [totalEmissions, setTotalEmissions] = useState(bioEmissions.map((emission, i) => {
    return {
        sector: emission.sector,
        type: {text: 'Sveriges totala utsläpp'},
        value: (Number(emission.value) + Number(fossilEmissions[i].value)),
        year: emission.year
    }
  }))

  const renderGradient = (ref, color, y0, y1) => {
    let ctx = ref.canvas
    let chart = ctx.getContext('2d')
    let gradient = chart.createLinearGradient(0, y0, 0, y1)
    gradient.addColorStop(0, color)
    gradient.addColorStop(1, 'transparent')
    return gradient
  }

  useEffect(() => {
    if (totalEmissions) {
        setChartData({
            labels: years.map(year => year),
            datasets: [{
                label: 'Biogena utsläpp',
                data: bioEmissions.map(emissions => emissions.value),
                fill: true,
                // backgroundColor: renderGradient(canvas.current, colors.bio, 200, 500),
                backgroundColor: colors.bio,
                borderColor: colors.border,
                borderWidth: 5,
                pointRadius: 0,
                tension: .2,
            },{
                label: 'Fossila utsläpp',
                data: fossilEmissions.map(emissions => emissions.value),
                fill: true,
                // backgroundColor: renderGradient(canvas.current, colors.bio, 300, 1000),
                backgroundColor: colors.fossil,
                borderColor: colors.border,
                borderWidth: 5,
                pointRadius: 0,
                tension: .2,
            },{
                label: totalEmissions[0].type.text,
                data: totalEmissions.map(emissions => emissions.value),
                fill: true,
                // backgroundColor: renderGradient(canvas.current, 'white', 0, 1200),
                backgroundColor: 'white',
                borderColor: colors.border,
                borderWidth: 5,
                pointRadius: 0,
                tension: .2,
            }]
        })
    }
  }, [totalEmissions])

  const handleClick = (e) => {
    let clickedDatasetIndex = e.target.dataset.index
    let chartDatasets = canvas.current.legend.chart._sortedMetasets

    chartDatasets.forEach(dataset => {
      console.log(dataset)
      if (dataset.index == clickedDatasetIndex) {
        if (dataset.hidden === true) {
          dataset.hidden = false
        } else {
          dataset.hidden = true
        }
      }
    });
    e.target.classList.toggle('active')
    canvas.current.legend.chart.update();  
  }

  return (
      <Container id='line-chart'>
        <ButtonContainer>
          <Button bio data-index={0} onClick={(e) => handleClick(e)}>Biogena utsläpp</Button>
          <Button fossil data-index={1} onClick={(e) => handleClick(e)}>Fossila utsläpp</Button>
          <Button data-index={2} onClick={(e) => handleClick(e)}>Totala utsläpp</Button>
        </ButtonContainer>
        <ChartContainer>
          <Line ref={canvas} data={chartData} options={options} />
        </ChartContainer>
      </Container>
  )
}

export default LineChartVersion1