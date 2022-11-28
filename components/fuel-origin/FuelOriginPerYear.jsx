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
    height: 500px;
    width: 800px;
`

const FuelOrigin = ({ energiMyndighetenData }) => {

  const canvas = useRef()
  const context = useContext(AppContext)
  const {displayYear, setDisplayYear} = context
  const [yearlyData, setYearlyData] = useState(null)
  const [options, setOptions] = useState(ChartOptions())
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  useEffect(() => {
    if (displayYear >= 2005 && displayYear <= 2020) {
        setYearlyData(energiMyndighetenData.filter(data => data.year === displayYear)[0].fuels)
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
                borderWidth: 2,
            }]
        })
    }
  }, [yearlyData])

  const colors = ['#ff0000','#ff5500', '#ff9100', '#eeff36', '#acff1d', '#00ff5e', '#00fbff', '#016bff', '#6f00ff', '#ff00aa']


  return (
      <Container id='doughnut'>
        <ChartContainer>
        <Doughnut ref={canvas} 
        data={chartData} 
        options={options} />
        </ChartContainer>
      </Container>
  )
}

export default FuelOrigin