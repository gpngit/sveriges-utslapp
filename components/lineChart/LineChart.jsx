//CSS
import styled, {css} from "styled-components";
import { flex, colors, size, fonts, device } from '../../styles/partials'
//Charts
import { Line, getDatasetAtEvent, getElementAtEvent, getElementsAtEvent } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
import annotationPlugin from 'chartjs-plugin-annotation'
//react hooks
import { useState, useEffect, useRef } from 'react';
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
//resources
import { SmallArrow } from "../SVG's/Arrows";

Chart.register(annotationPlugin)

const Wrapper = styled.div`
@media ${device.tablet}{
    clip-path: polygon(0% 100%, 4% 80%, 8% 80%, 12% 60%, 14% 36%, 16% 36%, 18% 0%, 20% 30%, 22% 18%, 26% 50%, 30% 20%, 32% 14%, 36% 10%, 40% 30%, 44% 10%, 46% 10%, 48% 7%, 52% 10%, 56% 14%, 58% 44%, 60% 0%, 62% 30%, 74% 38%, 76% 50%, 80% 30%, 82% 20%, 88% 30%, 90% 34%, 92% 40%, 96% 40%, 98% 55%, 100% 100%, 0% 100%);
    -webkit-clip-path:  polygon(0% 100%, 4% 80%, 8% 80%, 12% 60%, 14% 36%, 16% 36%, 18% 0%, 20% 30%, 22% 18%, 26% 50%, 30% 20%, 32% 14%, 36% 10%, 40% 30%, 44% 10%, 46% 10%, 48% 7%, 52% 10%, 56% 14%, 58% 44%, 60% 0%, 62% 30%, 74% 38%, 76% 50%, 80% 30%, 82% 20%, 88% 30%, 90% 34%, 92% 40%, 96% 40%, 98% 55%, 100% 100%, 0% 100%);
    }
    display:block;
    overflow:visible;
    position:relative;
    z-index:5;
    background-color:${colors.primary};
    height:100px;
`
const Bg = styled.div`
z-index:1;
background-color:${colors.secondary};
height:200px;
position:relative;
margin-bottom:-100px;
`
const Container = styled.section`
  position: relative;
  padding: 5em 0em 0em 5em;
  background-color: ${colors.primary};
  color: ${colors.secondary};
  @media ${device.tablet}{
    padding: 5em 5em 0em 5em;
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
    ${flex('column')}
  }
`
const Scrolltext = styled.div`
  width: 100%;
  ${flex('row', 'flex-end', 'flex-end')};
  ${fonts.paragraph};
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
const CheckboxContainer = styled.label`
  width: 200px;
  ${flex('row', 'space-between', 'center')};
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .labeltext {
    ${fonts.footnote};
  }
`
const Checkbox = styled.input.attrs({type: 'checkbox'})`
  display: none;

  &:hover ~ .checkmark {
    background-color: #ccc;
  }

  &:checked ~ .checkmark {

    ${props => props.bio && css`
      background-color: ${colors.bio};
    `}

    ${props => props.fossil && css`
      background-color: ${colors.fossil};
    `}
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`
const CheckMark = styled.span`
  ${flex('row', 'center', 'center')};
  height: 30px;
  width: 30px;
  background-color: #eee;
  border-radius: 5px;

  &:after {
    content: "";
    display: none;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const LineChart = ({emissions, pageElements}) => {

  const [show, setShow] = useState(pageElements.show)
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
  const [years, setYears] = useState([... new Set(emissions.map(emission => Number(emission.year)))])
  const mostRecentYear = years[years.length-1]
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

  const yearsForXAxis = []
  for (let i=1990; i<=2045; i++){
    yearsForXAxis.push(i)
  }

  useEffect(() => {
    if (totalEmissions) {
        setChartData({
            labels: yearsForXAxis.map(year => year),
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
            }
          ]
        })
    }
  }, [totalEmissions, displayYear])

  const handleCheckbox = (e) => {
    let clickedDatasetIndex = e.target.dataset.index
    let chartDatasets = canvas.current.legend.chart._sortedMetasets
    let {checked} = e.target

    if (checked) {
      chartDatasets[clickedDatasetIndex].hidden = false
    } else {
      chartDatasets[clickedDatasetIndex].hidden = true
    }
    canvas.current.legend.chart.update(); 
  }

  const changeDisplayYear = () => {
    if (canvas.current?.tooltip?.dataPoints?.length){
      let yearClicked = canvas.current.tooltip.dataPoints[0].label
      setDisplayYear(Number(yearClicked))
    }
  }

  const linePlugin = {
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
  }

  return (
    <>
    <Bg/>
    <Wrapper/>
      <Container id='line-chart'>
        {show && <>
        <TextContent>
          <p>{subheading.text.toUpperCase()}</p>
          <h2>{title.text}</h2>
          <p>{body1.text}</p>
        </TextContent>
        <ButtonContainer>
          <CheckboxContainer>
            <span className="labeltext">FOSSIL CO2</span>
            <Checkbox fossil onChange={(e) => handleCheckbox(e)} data-index={0} defaultChecked/>
            <CheckMark className="checkmark" />
          </CheckboxContainer>
          <CheckboxContainer>
            <span className="labeltext">BIOGEN CO2</span>
            <Checkbox bio onChange={(e) => handleCheckbox(e)} id="biogena-checkbox" data-index={1} defaultChecked/>
            <CheckMark className="checkmark" />
          </CheckboxContainer>
        </ButtonContainer>
        <Scrolltext>
          <p>Scrolla för att se utveckling</p>
          <SmallArrow color={colors.bio} size={16} />
        </Scrolltext>
        <ScrollContainer>
          <ChartContainer>
            <Line ref={canvas} data={chartData} options={options} plugins={[linePlugin, annotationPlugin]} onClick={changeDisplayYear}  />
          </ChartContainer>
        </ScrollContainer>
        </>} 
      </Container>
      </>
  )
}

export default LineChart