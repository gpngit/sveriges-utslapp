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

const Bg = styled.div`
  background-color:${colors.secondary};
  position:relative;
  display: none;
  height: 200px;
  @media ${device.tablet}{
    display: block;
  }
`
const Wrapper = styled.div`
  clip-path: polygon(0% 100%, 4% 80%, 8% 76%, 12% 70%, 16% 66%, 22% 64%, 26% 56%, 30% 60%, 34% 59%, 38% 66%, 42% 48%, 46% 44%, 50% 44%, 54% 40%, 60% 34%, 64% 30%, 68% 31%, 72% 14%, 76% 29%, 80% 20%, 82% 26%, 84% 20%, 88% 10%, 90% 4%, 94% 10%, 96% 4%, 99% 6%, 100% 4%, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0% 100%, 4% 80%, 8% 76%, 12% 70%, 16% 66%, 22% 64%, 26% 56%, 30% 60%, 34% 59%, 38% 66%, 42% 48%, 46% 44%, 50% 44%, 54% 40%, 60% 34%, 64% 30%, 68% 31%, 72% 14%, 76% 29%, 80% 20%, 82% 26%, 84% 20%, 88% 10%, 90% 4%, 94% 10%, 96% 4%, 99% 6%, 100% 4%, 100% 100%, 0% 100%);
  height: 100%;
  background-color:${colors.primary};
  display:block;
`
const Container = styled.main`
  ${flex('column')};
  gap: 2rem;
  background-color: ${colors.primary};
  color: black;
  padding: 2rem 0rem 5rem 1rem;
  @media ${device.mobileM}{
    padding-left: 2rem;
  }
  @media ${device.tablet}{
    padding: 2rem 4rem;
    
  }
  @media ${device.laptop}{
    padding-top:5rem;
    padding-bottom:5rem;
  }
`
const TextContent = styled.article`
  ${flex('column')};
  gap: 1rem;
  padding-right:2rem;
  @media ${device.laptop}{
    padding-left:8rem;
  }
  h2 {
    color: ${colors.border};
    margin-top:-0.7rem;
    ${fonts.lessheading};
    @media ${device.laptop}{
      margin-bottom:-0.3rem;
    }
  }

  p {
    ${fonts.paragraph};
    @media ${device.mobileTablet}{
      width:90%;
    }
    @media ${device.laptop}{
      max-width:50%;
    }
    text-align: justify;
        text-justify: inter-word; 
  }
`
const ButtonContainer = styled.div`
  max-width: 1000px;
  ${flex("row", 'flex-start', 'center')}

  @media ${device.tablet}{
    gap: 1rem;
  }
  @media ${device.laptop}{
    margin-top:-2rem;
    padding-left:10rem; 
  }

  .checkboxes {
    ${flex("row")};
    gap: 1rem;
  }

  .text {
  color: ${colors.bio};
  font-size:12px;
  }

  @media (max-width:${size.tablet}){ 
    ${flex("column")};
    gap: 1rem;
  }

`
const Scrolltext = styled.div`
  width: 100%;
  ${flex('row', 'flex-end', 'flex-end')};
  font-size: 14px;
  gap: 1rem;
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
  //*IE AND FIREFOX:
  @media ${device.laptop}{
    -ms-overflow-style:none;
    scrollbar-width: none;
  }

  &::-webkit-scrollbar {
      display: none;
  }
`
const ChartContainer = styled.div`
  min-height: 40vh;
  width: 100%;
  min-width: ${size.tablet};
  @media ${device.laptop}{
    padding-left:3rem;
  }
`
const CheckboxContainer = styled.label`
  ${flex('row-reverse', 'flex-start', 'center')};
  gap: .5rem;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
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
const Message = styled.div`
  text-align: right;
  width: 220px;
  position: absolute;
  display: none;
  right: 10vw;
  color: ${colors.border};
  p {
    font-weight: bold;
  }

  @media ${device.tablet}{
    display:block;
    left: 70%;
    gap: .6rem;
  }

  svg {
    transform: translate(-50px, 5px) rotate(120deg);
  }
`

const LineChart = ({emissions, pageElements}) => {

  const [show, setShow] = useState(pageElements.show)
  const {sections} = pageElements
  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')
  const body2 = sections.find(section => section.name === 'body2')

  const [labelBio, setLabelBio] = useState("FOSSIL + BIOGEN CO2")

  const canvas = useRef()
  const context = useContext(AppContext)
  const {displayYear, setDisplayYear} = context
  const [options, setOptions] = useState(ChartOptions(emissions, labelBio))
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [showMessage, setShowMessage] = useState(true)

  const [years, setYears] = useState([... new Set(emissions.map(emission => Number(emission.year)))])
  const mostRecentYear = years[years.length -1]
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
  for (let i=1990; i<=(mostRecentYear+10); i++){
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
    let checkboxes = document.querySelectorAll('.checkbox')

    if (!checkboxes[0].checked){
      checkboxes[1].disabled = true
    } else {
      checkboxes[1].disabled = false
    }

    if (!checkboxes[1].checked){
      checkboxes[0].disabled = true
    } else {
      checkboxes[0].disabled = false
    }

    let clickedDatasetIndex = e.target.dataset.index
    let chartDatasets = canvas.current.legend.chart._sortedMetasets
    let {checked} = e.target

    if (checked) {
      chartDatasets[clickedDatasetIndex].hidden = false
    } else {
      chartDatasets[clickedDatasetIndex].hidden = true
    }

    canvas.current.legend.chart.update(); 

    if (checkboxes[0].checked && checkboxes[1].checked){
      setShowMessage(true)
    } else {
      setShowMessage(false)
    }
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
    <Bg>
      <Wrapper/>
    </Bg>
    <Container id='line-chart'>
      {show && 
      <>
      <TextContent>
        <p>{subheading.text.toUpperCase()}</p>
        <h2>{title.text}</h2>
        <p>{body1.text}</p>
      </TextContent>  
      <Scrolltext>
        <p>Swipa höger för att se utveckling</p>
        <SmallArrow color={colors.bio} size={14} />
      </Scrolltext>
        <ScrollContainer>
          {showMessage && (
            <Message>
              <p>Titta, utsläppen är på ungefär samma nivå som 1990</p>
              <SmallArrow color={colors.secondary} size={16} />
            </Message>
          )}
          <ChartContainer>
            <Line ref={canvas} 
            data={chartData} 
            options={options} 
            plugins={[linePlugin, annotationPlugin]} 
            onClick={changeDisplayYear}  />
          </ChartContainer>
        </ScrollContainer>

        <ButtonContainer>
          <p className="text">Klicka och se hur de olika utsläppen har förändrats sedan 1990: </p>
          <div className="checkboxes">
            <CheckboxContainer>
              <span className="labeltext">FOSSIL CO2</span>
              <Checkbox className="checkbox" fossil onChange={(e) => handleCheckbox(e)} data-index={0} defaultChecked/>
              <CheckMark className="checkmark" />
            </CheckboxContainer>
            <CheckboxContainer>
              <span className="labeltext">BIOGEN CO2</span>
              <Checkbox className="checkbox" bio onChange={(e) => handleCheckbox(e)} id="biogena-checkbox" data-index={1} defaultChecked/>
              <CheckMark className="checkmark" />
            </CheckboxContainer>
          </div>
        </ButtonContainer>
        <TextContent>
        <p>{body2.text}</p>
        </TextContent>  
        </>} 
      </Container>
      </>
  )
}

export default LineChart