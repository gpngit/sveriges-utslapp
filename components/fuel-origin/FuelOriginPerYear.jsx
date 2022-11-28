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
    if (displayYear >= 2005) {
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

//   const datasets = []
//   for (let i=0; i<10; i++){
//     let obj = {
//         label: energiMyndighetenData.map(data => data.fuels[i]).map(data => data.name)[i],
//         data: energiMyndighetenData.map(data => data.fuels[i]).map(data => data.value),
//         fill: true,
//         backgroundColor: colors[i],
//         pointRadius: 0,
//         tension: .2,
//         borderColor: colors[i]
//     }
//     datasets.push(obj)
//   }


  return (
      <Container id='line-chart'>
        <ChartContainer>
        <Doughnut ref={canvas} 
        data={chartData} 
        options={options} />
        </ChartContainer>
      </Container>
  )
}

export default FuelOrigin