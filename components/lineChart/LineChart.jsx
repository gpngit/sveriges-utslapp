//CSS
import styled from "styled-components";
import { flex, colors } from '../../styles/partials'
//Charts
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState, useEffect } from 'react';

const Container = styled.section`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    padding: 60px;
    height: 100vh;
    width: 100%;
`
const ChartContainer = styled.div`
    position: relative;
    height: 80vh;
    width: 100%;
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
                backgroundColor: colors.hightlightOpaque,
                borderColor: colors.secondary,
                borderWidth: 2,
                pointRadius: 0,
                tension: .3,
            },{
                label: 'Fossila utsläpp', //fossilEmissions[0].type.text
                data: fossilEmissions.map(emissions => emissions.value),
                fill: true,
                backgroundColor: colors.secondaryOpaque,
                borderColor: colors.secondary,
                borderWidth: 2,
                pointRadius: 0,
                tension: .3,
            },{
                label: totalEmissions[0].type.text,
                data: totalEmissions.map(emissions => emissions.value),
                fill: true,
                backgroundColor: 'white',
                borderColor: '#5d5d5d',
                borderWidth: 2,
                pointRadius: 0,
                tension: .3,
            }]
        })
    }
  }, [totalEmissions])

  return (
      <Container id='line-chart'>
        <ChartContainer>
          {chartData && <Line data={chartData} options={options} />}
        </ChartContainer>
      </Container>
  )
}

export default LineChart