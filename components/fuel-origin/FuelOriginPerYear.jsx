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
    height: 50vh;
    width: 80vw;
    max-width: 500px;
`
const ErrorMessage = styled.div`
  height: 100%;
  width: 100%;
  ${flex('column','center','center')};
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
            }]
        })
    }
  }, [yearlyData])

  const colors = ['black','#f7941d', '#f15a29', 'grey', 'white', '#370000', '#96563d', 'darkgrey','gold', '#5f4f49', ]

  return (
      <Container id='doughnut'>
        <ChartContainer>
          {dataAvailable ?
        <Doughnut ref={canvas} data={chartData} options={options} />
          : <ErrorMessage>Data tillgänglig mellan 2005-2020. Ändra år ovan för att se graf.</ErrorMessage>}
        </ChartContainer>
      </Container>
  )
}

export default FuelOrigin