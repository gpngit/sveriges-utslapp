//CSS
import styled from "styled-components";
import { flex, colors } from '../../styles/partials'
//Charts
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState, useEffect } from 'react';

const Container = styled.div`
    background-color: ${colors.mainBackGround};
    padding: 30px;
    height: 100vh;
    width: 100%;
`
const ChartContainer = styled.div`
    position: relative;
    height: 80vh;
    width: 100%;
`
const ChartHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

const LineChart = ({ emissions }) => {

  const [options, setOptions] = useState(ChartOptions())
  const [chartData, setChartData] = useState(null)
  const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])
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

  useEffect(() => {
    if (totalEmissions) {
        setChartData({
            labels: years.map(year => year),
            datasets: [{
                label: 'Biogena utsläpp', //bioEmissions[0].type.text
                data: bioEmissions.map(emissions => emissions.value),
                fill: true,
                backgroundColor: '#ff6900',
                borderColor: '#5d5d5d',
                borderWidth: 3,
                pointRadius: 0,
                tension: .1,
            },{
                label: 'Fossila utsläpp', //fossilEmissions[0].type.text
                data: fossilEmissions.map(emissions => emissions.value),
                fill: true,
                backgroundColor: '#f78da7',
                borderColor: '#5d5d5d',
                borderWidth: 3,
                pointRadius: 0,
                tension: .1,
            },{
                label: totalEmissions[0].type.text,
                data: totalEmissions.map(emissions => emissions.value),
                fill: true,
                backgroundColor: '#8ed1fc',
                borderColor: '#5d5d5d',
                borderWidth: 3,
                pointRadius: 0,
                tension: .1,
            }]
        })
    }
  }, [totalEmissions])

  return (
      <Container>
        <ChartHeader>Sveriges koldioxidutsläpp sedan 1990</ChartHeader>
        <ChartContainer>
          {chartData && <Line data={chartData} options={options} />}
        </ChartContainer>
      </Container>
  )
}

export default LineChart