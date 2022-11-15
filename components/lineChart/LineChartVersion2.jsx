//CSS
import styled, {css} from "styled-components";
import { flex, colors, AxisThickness, LineChartWidth, size } from '../../styles/partials'
//Charts
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState, useEffect, useRef } from 'react';

const Container = styled.section`
  background-color: ${colors.primary};
  color: ${colors.secondary};
  height: 90vh;
`
const ButtonContainer = styled.div`
  padding: 20px;
  ${flex('row', 'center', 'center')};
  gap: 10px;

  @media (max-width: ${size.tablet}) {
    visibility: hidden;
  }
`
const ChartContainer = styled.div`
  /* position: absolute; */
  height: 100%;
  min-width: ${LineChartWidth};
`
const AxisAndScrollContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  ${flex('row')};
  overflow-x: auto;

  &::-webkit-scrollbar {
      display: none;
  }
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
const YAxis = styled.div`
  position: sticky;
  ${flex('column-reverse', 'space-between', 'flex-end')};
  z-index: 1;
  left: 0;
  height: 100%;
  min-width: ${AxisThickness};
  background-color: ${colors.primary};
`
const XAxis = styled.div`
  ${flex('row', 'space-between', 'flex-end')};
  position: absolute;
  bottom: 0;
  margin-left: ${AxisThickness};
  width: ${LineChartWidth}; 
`
const XTick = styled.div`
    flex-basis: 100%;
    ${flex('column-reverse', 'flex-start', 'center')};
    gap: 40px;
    padding: 10px;
    text-align: center;
    height: 60vh;
    font-size: 14px;

    strong {
    font-size: 30px;
    color: rgba(255, 255, 255, .5);
    }

    .info-per-year {
      display: none;
    }

    &:hover, &:active {
      background: linear-gradient(transparent, rgba(255, 255, 255, 0.8));

      strong {
        color: white;
      }

      .info-per-year {
        ${flex('column', 'center', 'center')};
        gap: 20px;
        font-size: 16px;
      }
    }
`
const YTick = styled.span`
  font-size: 14px;
  padding-right: 20px;
`

const LineChart = ({ emissions }) => {

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
  const YScale = []
  for(let i=0; i<140000; i+=10000){
    YScale.push(i)
  }

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
                // backgroundColor: 'white',
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
        <AxisAndScrollContainer>
          <YAxis>
            {YScale.map(val => <YTick key={val}>{val}</YTick>)}
          </YAxis>
          <ChartContainer>
            <Line ref={canvas} data={chartData} options={options} />
          </ChartContainer>
          <XAxis>
            {years.map((year, i) => {
              if (Number(year) % 5 === 0){
                return (
                <XTick key={year}>
                  <strong className="year">{year}</strong>
                  <div className="info-per-year">
                    <div className="fossila">
                      <p>Fossila</p>
                      <p>{Math.round(Number(fossilEmissions.filter(emission => emission.year === year).map(emission => emission.value)))}</p>
                    </div>
                    <div className="biogena">
                      <p>Biogena</p>
                      <p>{Math.round(Number(bioEmissions.filter(emission => emission.year === year).map(emission => emission.value)))}</p>
                    </div>
                    <div className="totala">
                      <p>Totalt</p>
                      <p>{Math.round(Number(totalEmissions.filter(emission => emission.year === year).map(emission => emission.value)))}</p>
                    </div>
                  </div>
                </XTick>
                )
              }
            })}
          </XAxis>
        </AxisAndScrollContainer>
      </Container>
  )
}

export default LineChart