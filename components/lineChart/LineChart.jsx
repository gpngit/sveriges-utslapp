//CSS
import styled from "styled-components";
import { flex, colors } from '../../styles/partials'
//Charts
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartOptions from "./ChartOptions";
//react hooks
import { useState } from 'react';

const Container = styled.div`
    position: relative;
    height: 60vh;
    width: 80vw;
    background-color: red;
`

const LineChart = ({chartData}) => {

  const [options, setOptions] = useState(ChartOptions())

  console.log(options)

  return (
      <Container>
        {/* <Line data={chartData} options={options} /> */}
      </Container>
  )
}

export default LineChart