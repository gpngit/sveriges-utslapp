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
  position: relative;
  padding: 5em;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  @media ${device.mobileL}{
    padding-right: 0em;
  }
`
const TextContent = styled.div`
  padding: 1rem 0rem;

  h2 {
      ${fonts.heading};;
  }

  p {
      ${fonts.paragraph};
  }
`
const ButtonContainer = styled.div`
  padding: 1rem;
  ${flex('row', 'center', 'center')};
  gap: 1rem;

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`
const Scrolltext = styled.div`
  width: 100%;
  ${flex('row', 'flex-end', 'flex-end')};
  ${fonts.paragraph}
  gap: 1rem;
  padding: 1rem;
  color: ${colors.bio};

  @media (min-width: ${size.tablet}) {
  display: none;
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
  min-height: 70vh;
  width: 100%;
  min-width: ${size.tablet};
`
const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
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

const LineChart = ({emissions, pageElements}) => {

  const {sections} = pageElements
  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')

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

  useEffect(() => {
    if (totalEmissions) {
        setChartData({
            labels: years.map(year => year),
            datasets: [{
              label: 'Fossila utsläpp',
              data: fossilEmissions.map(emissions => emissions.value),
              fill: true,
              backgroundColor: colors.fossil,
              borderColor: colors.border,
              borderWidth: 5,
              pointRadius: 0,
              tension: .2,
          },{
              label: 'Biogena utsläpp',
              data: bioEmissions.map(emissions => emissions.value),
              fill: true,
              backgroundColor: colors.bio,
              borderColor: colors.border,
              borderWidth: 5,
              pointRadius: 0,
              tension: .2,
            },
            // {
            //     label: totalEmissions[0].type.text,
            //     data: totalEmissions.map(emissions => emissions.value),
            //     fill: true,
            //     borderColor: colors.border,
            //     borderWidth: 5,
            //     pointRadius: 0,
            //     tension: .2,
            // }
          ]
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
        <TextContent>
          <p>{subheading.text.toUpperCase()}</p>
          <h2>{title.text}</h2>
          <p>{body1.text}</p>
        </TextContent>
        <Scrolltext>
          <p>Scrolla för att se utveckling</p>
          <SmallArrow color={colors.bio} size={16} />
        </Scrolltext>
        <ButtonContainer>
          <Button bio data-index={0} onClick={(e) => handleDataVisibility(e)}>Biogena utsläpp</Button>
          <Button fossil data-index={1} onClick={(e) => handleDataVisibility(e)}>Fossila utsläpp</Button>
          {/* <Button data-index={2} onClick={(e) => handleDataVisibility(e)}>Totala utsläpp</Button> */}
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