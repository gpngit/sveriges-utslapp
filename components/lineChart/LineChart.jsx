//CSS
import styled, {css} from "styled-components";
import { flex, colors, size, fonts, device } from '../../styles/partials'
//Charts
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState, useEffect, useRef } from 'react';
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
//resources
import { SmallArrow } from "../SVG's/Arrows";

const Container = styled.section`
@media ${device.laptop}{
  padding:10em;
  padding-bottom:0;
  padding-top:0;
}
  position: relative;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  height: 85vh;
`
const ButtonContainer = styled.div`
  padding-top: 60px;
  ${flex('row', 'center', 'center')};
  gap: 10px;

  @media (max-width: ${size.tablet}) {
    visibility: hidden;
  }
`
const Scrolltext = styled.div`
  ${flex('row', 'flex-start', 'flex-end')};
  ${fonts.paragraph}
  gap: 6px;
  position: absolute;
  color: ${colors.bio};
  right: 20px;
  top: 60px;
  max-width: 300px;

  @media (min-width: ${size.tablet}) {
  visibility: hidden;
  }
`
const ScrollContainer = styled.div`
 position: relative;
  height: 100%;
  width: 100%;
  ${flex('row')};
  overflow-x: auto;

  &::-webkit-scrollbar {
      display: none;
  }
`
const ChartContainer = styled.div`
  height: 80%;
  width: 100%;
  min-width: ${size.tablet};
`
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
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

const LineChart = ({ emissions }) => {

  const canvas = useRef()
  const context = useContext(AppContext)
  const {displayYear, setDisplayYear} = context
  const [options, setOptions] = useState(ChartOptions(emissions))
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
  const YScale = []
  for(let i=0; i<140000; i+=10000){
    YScale.push(i)
  }

  useEffect(() => {
    if (totalEmissions) {
        setChartData({
            labels: years.map(year => year),
            datasets: [{
                label: 'Biogena utsläpp',
                data: bioEmissions.map(emissions => emissions.value),
                fill: true,
                backgroundColor: colors.bio,
                borderColor: colors.border,
                borderWidth: 5,
                pointRadius: 0,
                tension: .2,
            },{
                label: 'Fossila utsläpp',
                data: fossilEmissions.map(emissions => emissions.value),
                fill: true,
                backgroundColor: colors.fossil,
                borderColor: colors.border,
                borderWidth: 5,
                pointRadius: 0,
                tension: .2,
            },{
                label: totalEmissions[0].type.text,
                data: totalEmissions.map(emissions => emissions.value),
                fill: true,
                borderColor: colors.border,
                borderWidth: 5,
                pointRadius: 0,
                tension: .2,
            }]
        })
    }
  }, [totalEmissions, displayYear])

  const handleDataVisibility = (e) => {
    let clickedDatasetIndex = e.target.dataset.index
    let chartDatasets = canvas.current.legend.chart._sortedMetasets

    chartDatasets.forEach(dataset => {
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

  // for drawing line on chart when hover over tooltip
  const linePlugin = [{
    afterDraw: chart => {
      let ctx = chart.ctx;
      let yAxis = chart.scales.y;

      let gradient = ctx.createLinearGradient(0, 0, 0, yAxis.height);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(1 , "rgba(0,0,0,.5)");

      if (chart.tooltip?._active?.length) {
        let x = chart.tooltip._active[0].element.x;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x, yAxis.top);
        ctx.lineTo(x, yAxis.bottom);
        ctx.lineWidth = 10;
        ctx.strokeStyle = gradient;
        ctx.stroke();
        ctx.restore(); 
      }
    }
  }]

  return (
      <Container id='line-chart'>
          <Scrolltext>
            <p>Scrolla för att se utveckling</p>
            <SmallArrow color={colors.bio} size={16} />
          </Scrolltext>
          <ButtonContainer>
            <Button bio data-index={0} onClick={(e) => handleDataVisibility(e)}>Biogena utsläpp</Button>
            <Button fossil data-index={1} onClick={(e) => handleDataVisibility(e)}>Fossila utsläpp</Button>
            <Button data-index={2} onClick={(e) => handleDataVisibility(e)}>Totala utsläpp</Button>
          </ButtonContainer>
          <ScrollContainer>
            <ChartContainer>
              <Line ref={canvas} data={chartData} options={options} plugins={linePlugin} />
            </ChartContainer>
          </ScrollContainer>
      </Container>
  )
}

export default LineChart