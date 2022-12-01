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
`
const ChartContainer = styled.div`
  position: relative;
  height: 50vh;
  width: 80vw;
  max-width: 500px;
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
const ErrorMessage = styled.div`
  height: 100%;
  width: 100%;
  ${flex('column','center','center')};
`
const SourceText = styled.p`
  padding: 2rem 0;
`

const FuelOrigin = ({ energiMyndighetenData }) => {

  const canvas = useRef()
  const context = useContext(AppContext)
  const {displayYear, setDisplayYear} = context
  const [yearlyData, setYearlyData] = useState(null)
  const [dataAvailable, setDataAvailable] = useState(false)
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

  const colors = ['black','#f7941d', '#f15a29', 'grey', 'white', '#370000', '#96563d', 'darkgrey','gold', '#5f4f49', ]

  return (
      <Container id='doughnut'>
        <SourceText>Graf visar användning av biobränslen per bränslekategori (GWh). Data från Energimyndigheten.</SourceText>
        <ChartContainer className="no-data">
          <Doughnut ref={canvas} data={chartData} options={options} /> 
          {!dataAvailable && (
          <Overlay>
            <p>Data endast tillgänglig mellan 2005-2020</p>
          </Overlay>
          )}
        </ChartContainer>
      </Container>
  )
}

export default FuelOrigin