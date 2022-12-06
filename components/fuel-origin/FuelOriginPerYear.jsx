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
  max-width: 700px;
  @media ${device.tablet}{
    gap:0rem;
  }
  @media ${device.mobileL}{
    ${flex('column-reverse')};
  }
  @media ${device.mobileTablet}{
    ${flex('column')};
  }
  @media ${device.laptopL}{
    margin-top:-1rem;
  }
  @media ${device.desktop}{
    padding-left:2rem;
  }
`
const Row600px = styled.div`
@media ${device.mobileTablet}{
  ${flex("row")}
}
@media ${device.laptop}{
  ${flex("column")}
}
@media ${device.laptopL}{
  ${flex("column")}
  width:500px;
  padding: 0;
  margin: 0;
  padding-right:3em;
  padding-top:1rem;
}
@media ${device.desktop}{
  margin-top:-2rem;
  width:800px;
  padding-right:0;
}
`
const ChartContainer = styled.div`
@media (max-width: ${size.mobileS}){ 
  display:none;
} 
  position: relative;
  @media ${device.mobileS}{
    height:20vh;
    width: 80vw;
    max-width: 600px;
    margin-top:-2rem;
  }
  @media ${device.mobileL}{
    height: 30vh;
    min-height:100px;
  }
  @media ${device.mobileTablet}{
    width:30vh;
    margin-left:-1rem;
    height:25vh;
    min-width:200px;
  }
  @media ${device.tablet}{
    width:40vh;
    margin-left:1rem;
  }
  @media ${device.laptop}{
    max-width:400px;
    height:30vh;
    width:40vh;
    align-self:center;
    margin-top:-2rem;
  }
  @media ${device.laptopL}{
    align-self:flex-start;
    height:30vh;
    max-width:400px;
    width:50vw;
    max-height:400px;
  }
`
const Overlay = styled.div`
  ${flex('column','center','center')};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width:100%;
  @media ${device.mobileTablet}{
    width: 190%;
  }
  @media ${device.tablet}{
    width:90%;
  }
  @media ${device.laptop}{
    width:100%;
  }

  button {
    background-color: ${colors.fossil};
    color: white;
    margin-top: .5rem;
    border: none;
    padding: .4rem 1rem;
  }
  
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
  padding:1rem;
  
  @media ${device.mobileL}{
    margin-top:-1rem;
    max-width:100%;
    align-self:center;
    padding-right:5rem;
  }
  @media ${device.mobileTablet}{
    padding-left:0;
    margin-top:-2rem;
    margin-bottom:1rem;
    align-self:start;
  }
  @media ${device.tablet}{
    margin-bottom:2rem;
    padding-left:3rem;
    text-align:left;
  }
  @media ${device.laptop}{
    margin:0;
    width:100%;
    padding:0;
    padding-bottom:1rem;
    margin-bottom:0.4rem;
    margin-left:-3rem;
  }
  @media ${device.laptopL}{
    width:100%;
    text-align:left;
    margin-left:0;
  }
  @media (max-width: ${size.mobileS}){
    text-align:left;
    padding-right:2rem;
  }
`
const LabelsContainer = styled.div`
  padding-left:1rem;
  padding-bottom:2rem;
  padding-right:1rem;
  align-self: center;
  ${flex('column', 'center', 'flex-start')};
  gap: 0.3rem;
  flex-wrap: wrap;
  margin-top:-1rem;
  p{
    line-height:1rem;
    text-align:left;
  }

  @media (max-width: ${size.mobileS}){ 
    gap:1.2rem;
    padding-right:1rem;
  } 
  
  @media ${device.mobileL}{
    padding:0;
    gap:0.5rem;
    margin-bottom:1rem;
  }
  @media ${device.mobileTablet}{
    gap:0.2rem;
    margin-left:-1rem;
    width:100%;
  }
  @media ${device.tablet}{
    ${flex('row')}
    gap:0.5rem;
    padding-left:3rem;
    
  }
  @media ${device.laptop}{
  margin-top:0;
  margin-bottom:0;
  gap:0.6rem;
  padding-left:0;
  }
  @media ${device.desktop}{
    gap:1rem;
  }
`
const Label = styled.div`
  ${flex('row-reverse')};
  gap: .5rem;
  color: black;
  height:22px;
  @media (max-width: ${size.mobileS}){ 
    gap:.3rem;
    ${flex('row-reverse', "center", "flex-start")};
  }
  div {
    height: 20px;
    width: 20px;
    @media (max-width: ${size.mobileL}){
      margin-top:3px;
    }
    @media ${device.laptopL}{
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
  }, [yearlyData, displayYear])

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
  
  const colors = ['#5f4f49','#96563d','#3d873db3','#f7941d', '#370000', 'darkgrey','#663531', '#3d873d','#f8f6f6','#f15a29' ,]

  return (
      <Container id='doughnut'>
        <SourceText>Användning av biobränslen per bränslekategori (GWh). Data kommer från Energimyndigheten.</SourceText>
        <Row600px>
          <ChartContainer>
              <Doughnut 
              aria-label="Graf som visar varifrån biobränslet kommer ifrån. Datan är endast tillgänglig mellan 2005-2020 i dagsläget."
              role="img"
              ref={canvas} 
              data={chartData} 
              options={options} /> 
            {!dataAvailable && (
            <Overlay>
              <p>Data endast tillgänglig mellan 2005-2020</p>
              <button onClick={() => setDisplayYear(2005)}>Gå till 2005</button>
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
            </Row600px>
      </Container>
  )
}

export default FuelOrigin