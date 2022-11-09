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
    position: relative;
    padding: 40px;
    height: 80vh;
    width: 100%;
`

const LineChart = ({ emissions }) => {

  const [options, setOptions] = useState(ChartOptions())
  const [chartData, setChartData] = useState(null)
  const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])
//   const [sectors, setSectors] = useState([... new Set(emissions.map(emission => emission.sector.val))])
//   const [types, setTypes] = useState([... new Set(emissions.map(emission => emission.type.text))])
  const [bioEmissions, setBioEmissions] = useState(emissions.filter(emission => emission.type.val === 'CO2-BIO').filter(emission => emission.sector.val === '0.1'))
  const [fossilEmissions, setFossilEmissions] = useState(emissions.filter(emission => emission.type.val === 'CO2-ekv.').filter(emission => emission.sector.val === '0.1'))
  const [totalEmissions, setTotalEmissions] = useState(null)

  useEffect(() => {
    setTotalEmissions(bioEmissions.map((emission, i) => {
        return {
            sector: emission.sector,
            type: {text: 'Sveriges totala utsläpp'},
            value: (Number(emission.value) + Number(fossilEmissions[i].value)),
            year: emission.year
        }
      }))
  }, [])

  useEffect(() => {
    if (totalEmissions) {
        setChartData({
            labels: years.map(year => year),
            datasets: [{
                label: bioEmissions[0].type.text,
                data: bioEmissions.map(emissions => emissions.value)
            },{
                label: fossilEmissions[0].type.text,
                data: fossilEmissions.map(emissions => emissions.value)
            },{
                label: totalEmissions[0].type.text,
                data: totalEmissions.map(emissions => emissions.value)
            }]
        })
    }
  }, [totalEmissions])

  return (
      <Container>
        {chartData && <Line data={chartData} options={options} />}
      </Container>
  )
}

export default LineChart