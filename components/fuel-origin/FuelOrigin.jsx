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

const FuelOrigin = ({data, pageElements}) => {

  const {sections} = pageElements
  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')

  const canvas = useRef()
  const [options, setOptions] = useState(ChartOptions())
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const colors = ['#562828','#563728', '#564228', '#525628', '#3a5628', '#285639', '#285556', '#283b56', '#3c2856', '#562847']

  const datasets = []
  for (let i=0; i<10; i++){
    let obj = {
        label: data.map(data => data.fuels[i]).map(data => data.name)[i],
        data: data.map(data => data.fuels[i]).map(data => data.value),
        fill: true,
        backgroundColor: colors[i],
        pointRadius: 0,
        tension: .2
    }
    datasets.push(obj)
  }
  
  useEffect(() => {
    setChartData({
        labels: data.map(data => data.year),
        datasets: datasets    
    })
  }, [])

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
            {/* knappar ??? */}
        </ButtonContainer>
        <ScrollContainer>
          <ChartContainer>
            <Line ref={canvas} data={chartData} options={options} />
          </ChartContainer>
        </ScrollContainer>
      </Container>
  )
}

export default FuelOrigin