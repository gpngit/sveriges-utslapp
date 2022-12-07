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
const Container = styled.article`
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
    padding-left:10rem;
  }
`
const Grid = styled.div`
  display: grid;
  gap: 1rem;
  padding-right:2rem;
  padding-bottom:2rem;
  padding-left:1rem;
  @media ${device.laptop}{
    padding-top:1rem;
    padding-left:5rem;
    padding-right:5rem;
    gap:2rem;
    grid-template-columns: repeat(2, 1fr); 
  }
  @media ${device.laptopL}{
    gap:5rem;
    padding-left:9rem;
    padding-bottom:8rem;
  }
`
const TextContent = styled.div`
  ${flex('column')};
  gap: 1rem;
  padding-right:2rem;

  @media ${device.laptop}{
    padding-left:6rem;
  }

  h2 {
    color: ${colors.secondary};
    margin-top:-0.7rem;
    ${fonts.lessheading};

    @media ${device.laptop}{
      margin-bottom:-0.3rem;
    }
  }
  p {
    text-align: left;
    text-justify: inter-word;
    ${fonts.paragraph};

    @media ${device.mobileTablet}{
      width:90%;
    }
    @media ${device.laptop}{
      max-width:80%;
    }
    @media (max-width: ${size.mobileS}){ 
      width:90%;
    } 
  }
`
const GridText = styled.div`
p {
  text-align: left;
  text-justify: inter-word;
  ${fonts.paragraph};
  max-width:500px;
}
h3{
  color: ${colors.border};
  font-size:clamp(1.2rem, 1vw, 1.6rem); 
  padding-bottom:.5rem;
}
` 
const Scrolltext = styled.div`
  width: 100%;
  ${flex('row', 'flex-end', 'flex-end')};
  font-size: 14px;
  gap: 1rem;
  color: ${colors.border};
  @media (min-width: ${size.mobiletablet}) {
  display: none;
  }
`
const ScrollContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  ${flex('row')};
  overflow-x: auto;
  cursor:grab;

  width:98%;  
  scrollbar-color: ${colors.fossil} ${colors.white};
  scrollbar-width: thin;
  ::-webkit-scrollbar{
    
    background-color:${colors.white};
    border-radius:9px;
    height:4px;
  }
  ::-webkit-scrollbar-thumb{
    background-color:${colors.fossil};
    -webkit-box-shadow: inset 1px 1px 0 rgba(0,0,0,0.10),inset 0 -1px 0 rgba(0,0,0,0.07);
  }
  @media ${device.laptop}{
    -ms-overflow-style:none;
    scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
    }
  }
`
const ChartContainer = styled.div`
  min-height: 40vh;
  
  width: 100%;
  min-width: ${size.tablet}-1rem;
  
  @media ${device.laptop}{
    padding-left:5rem;
    padding-right:5rem;
  }
  padding-bottom:.5rem;
  
`
const Message = styled.div`
  text-align: right;
  width: 200px;
  position: absolute;
  display: none;
  right: 10vw;
  color: ${colors.border};
  p {
    font-weight: bold;
  }
  @media ${device.tablet}{
    display:block;
    left: 60%;
  }
  @media ${device.laptop}{
    display:block;
    left: 72%;
  }
  svg {
    transform: translate(-40px, 0px) rotate(120deg);
  }
`
const RadioContainer = styled.fieldset`
    border: none;
    ${flex("row", 'flex-start')};
    @media (max-width: 490px){
      ${flex("column", 'flex-start')};
    }
    @media ${device.laptop}{
      padding-left:10rem;
    }
    legend{
      ${fonts.button}
      padding-left:2px;
    }
    >div {
      padding: .6rem 1rem;
      @media (max-width: 490px){
        padding-left: 0px;
      }
    }
    >div:first-of-type{
      border-right: 2px solid black;
      border-bottom: none;
      padding-left: 0px;

      @media (max-width: 490px){
      border-bottom: 2px solid black;
      border-right:none;
      }
    }
    >div:last-of-type{
      border-left: 2px solid black;
      border-top: none;

      @media (max-width: 490px){
      border-top: 2px solid black;
      border-left:none;
      }
    }
`
const RadioButton = styled.input.attrs({type: 'radio'})`
  opacity: 0;
	width: 0;
  height: 0;
  
  &:hover, &:focus, &:active {
    text-decoration: none;
    }

  &:checked ~ label {
    opacity: 1;
    text-decoration: none;

    ${props => props.both && css`
    background: ${colors.border};
    color: white;
    `}
    ${props => props.bio && css`
      background: ${colors.bio};
      color: white;
    `}
    ${props => props.fossil && css`
      background: ${colors.fossil};
      color: white;
    `}
  }
`
const RadioLabel = styled.label`
cursor:pointer;
  text-decoration: underline;
  padding: .5rem 1rem;
  ${fonts.button};
  &:hover, &:focus, &:active {
    text-decoration: none;

    ${props => props.both && css`
    background: ${colors.border};
    color: white;
    `}
    ${props => props.bio && css`
      background: ${colors.bio};
      color: white;
    `}
    ${props => props.fossil && css`
      background: ${colors.fossil};
      color: white;
    `}
	}
`

const LineChart = ({emissions, pageElements}) => {

  const [show, setShow] = useState(pageElements.show)
  const {sections} = pageElements
  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')
  const body2 = sections.find(section => section.name === 'body2')
  const body3 = sections.find(section => section.name === 'body3')
  const rubrik2 = sections.find(section => section.name === 'rubrik2')
  const rubrik3 = sections.find(section => section.name === 'rubrik3')

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
  
  const handleRadioButtons = (e) => {
    let clickedDatasetIndex = e.target.dataset.index
    let chartDatasets = canvas.current.legend.chart._sortedMetasets

    if (clickedDatasetIndex == 0){
      chartDatasets[1].hidden = true
      chartDatasets[0].hidden = false
      setShowMessage(false)
    } else if (clickedDatasetIndex == 1){
      chartDatasets[0].hidden = true
      chartDatasets[1].hidden = false
      setShowMessage(false)
    } else {
      chartDatasets[0].hidden = false
      chartDatasets[1].hidden = false
      setShowMessage(true)
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

  useEffect(() => {
    //radbryt:
    document.getElementById(`line-chart-body1`).innerText = body1.text.replaceAll(/<br\s*[/]?>/gi, "\n");
    document.getElementById(`line-chart-body2`).innerText = body2.text.replaceAll(/<br\s*[/]?>/gi, "\n");
    document.getElementById(`line-chart-body3`).innerText = body3.text.replaceAll(/<br\s*[/]?>/gi, "\n");
  }, [])

  return (
    <>
    <Bg>
      <Wrapper/>
    </Bg>
    {show && 
    <Container id='line-chart'>
      <TextContent>
        <p>{subheading.text.toUpperCase()}</p>
        <h2>{title.text}</h2>
        <p 
        id="line-chart-body1">
          {body1.text.replaceAll(/<br\s*[/]?>/gi, "")}
        </p>
      </TextContent>  
      <RadioContainer onChange={(e) => handleRadioButtons(e)}>
        <legend>Visa</legend>
        <div>
          <RadioButton defaultChecked both 
          className="sr-only" 
          id="fossil-biogen" 
          tabindex="0"
          name="radio-btn" />
          <RadioLabel both 
          htmlFor='fossil-biogen'>Fossil + Biogen CO2</RadioLabel>
        </div>
        <div>
          <RadioButton 
          data-index={0} fossil 
          className="sr-only" 
          tabindex="0"
          id="fossil" 
          name="radio-btn" />
          <RadioLabel fossil  
          htmlFor='fossil'>Fossil CO2</RadioLabel>
        </div>
        <div>
          <RadioButton 
          data-index={1} bio 
          tabindex="0"
          className="sr-only" 
          id="biogen" 
          name="radio-btn" />
          <RadioLabel bio 
          htmlFor='biogen'>Biogen CO2</RadioLabel>
        </div>
        </RadioContainer>
      <Scrolltext>
        <p>Swipa höger för att se utveckling</p>
        <SmallArrow 
        color={colors.bio} 
        size={14} />
      </Scrolltext>
        <ScrollContainer>
          {showMessage && (
            <Message>
              <p>Titta, utsläppen är på ungefär samma nivå som 1990</p>
              <SmallArrow 
              color={colors.border} 
              size={16} />
            </Message>
          )}
        <ChartContainer>
            <Line ref={canvas} 
            aria-label="Graf som visar hur både fossila och biobränslets utsläpp har blivit påverkade sedan 1990. Vi kan se att de fossila bränslenas utsläpp har minskat, men att biobränslet har helt fyllt upp samma summa. Därför är det 2020 lika mycket utsläpp som det är 1990, men att knappt hälften är fossila."
            role="img"
            data={chartData} 
            options={options} 
            plugins={[linePlugin, annotationPlugin]} 
            onClick={changeDisplayYear}  />
        </ChartContainer>
        </ScrollContainer>
        <Grid>  
          <GridText>
          <h3>{rubrik2.text}</h3>
            <p 
            id="line-chart-body2">
              {body2.text.replaceAll(/<br\s*[/]?>/gi, "")}
            </p>
          </GridText>
          <GridText>
            <h3>{rubrik3.text}</h3>
            <p 
            id="line-chart-body3">
              {body3.text.replaceAll(/<br\s*[/]?>/gi, "")}
            </p>
          </GridText>
        </Grid>
      </Container>
      } 
      </>
  )
}

export default LineChart