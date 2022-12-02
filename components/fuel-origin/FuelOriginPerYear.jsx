//CSS
import styled, {css} from "styled-components";
import { flex, colors, size, fonts, device } from '../../styles/partials'
//Charts
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState, useEffect, useRef } from 'react';
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'


const Container = styled.section`
  ${flex('column')};
  gap: 1rem;
  max-width: 600px;
  @media ${device.tablet}{
    gap:0rem;
  }
`
const ChartContainer = styled.div`
  position: relative;
  @media ${device.mobileS}{
    height:20vh;
    width: 80vw;
    max-width: 600px;
    margin-top:-2rem;
  }

  @media ${device.mobileL}{
    height: 30vh;
  }
  @media ${device.tablet}{
    max-width:500px;
    height:30vh;
  }
  @media ${device.laptop}{
    max-width:400px;
    height:30vh;
  }
`
const Overlay = styled.div`
  ${flex('column','center','center')};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  p {
    background-color: black;
    color: white;
    padding: .6rem 1.4rem;
    text-align: center;
  }
`
const SourceText = styled.p`
  font-style:italic;
  ${fonts.footnote};
`
const LabelsContainer = styled.div`
  align-self: center;
  ${flex('column', 'center', 'flex-start')};
  gap: 0.3rem;
  flex-wrap: wrap;
  @media ${device.mobileL}{
    gap:0.5rem;
  }
  @media ${device.tablet}{
    ${flex('row')}
    gap:0.5rem;
  }
`
const Label = styled.div`
  ${flex('row-reverse')};
  gap: .5rem;
  color: black;
  height:22px;
  div {
    height: 20px;
    width: 20px;
    @media (max-width: ${size.mobileL}){
      margin-top:3px;
    }
    
  }
`

const FuelOrigin = ({ energiMyndighetenData }) => {

  const canvas = useRef()
  const context = useContext(AppContext)
  const {displayYear, setDisplayYear} = context
  const [yearlyData, setYearlyData] = useState(null)
  const [dataAvailable, setDataAvailable] = useState(false)
  const [customLabels, setCustomLabels] = useState(null)
  const [options, setOptions] = useState(ChartOptions())
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  useEffect(() => {
    if (displayYear >= 2005 && displayYear <= 2020) {
      setDataAvailable(true)
      setYearlyData(energiMyndighetenData.filter(data => data.year === displayYear)[0].fuels)
    } else {
      setDataAvailable(false)
      setChartData({
        labels: '',
        datasets: [{
          label: '',
          data: [1]
        }]
      })
    }
  }, [displayYear])

  useEffect(() => {
    if (yearlyData) {
        setCustomLabels(yearlyData.map((data, i) => {
          return {
            name: data.name,
            color: colors[i],
            value: data.value,
            percentage: Math.round(data.value / (yearlyData.reduce((a, b) => a + b.value, 0)) * 100)
          }
        }).sort((a,b) => b.value - a.value ))
        setChartData({
            labels: yearlyData.map(data => data.name),
            datasets: [{
                label: 'value',
                data: yearlyData.map((data, i) => data.value),
                backgroundColor: colors,
                borderWidth: 0,
                hoverOffset: 20,
            }]
        })
    }
  }, [yearlyData])

  // const colors = ['black','#f7941d', '#f15a29', 'grey', 'white', '#370000', '#96563d', 'darkgrey','gold', '#5f4f49', ]

  
  const colors = ['#5f4f49','#96563d','#3d873db3','#f7941d', '#370000', 'darkgrey','#663531', '#3d873d','white','#f15a29' ,]

  return (
      <Container id='doughnut'>
        <SourceText>Användning av biobränslen per bränslekategori (GWh). Data kommer från Energimyndigheten.</SourceText>
          <ChartContainer>
              <Doughnut ref={canvas} data={chartData} options={options} /> 
            {!dataAvailable && (
            <Overlay>
              <p>Data endast tillgänglig mellan 2005-2020</p>
            </Overlay>
            )}
          </ChartContainer>
          <LabelsContainer>
            {customLabels && customLabels.map((label, i) => {
              return (
                <Label key={i}>
                  <p>{label.name} ({label.percentage}%)</p>
                  <div style={{backgroundColor: label.color}}></div>
                </Label>
              )
            })}
            </LabelsContainer>
      </Container>
  )
}

export default FuelOrigin