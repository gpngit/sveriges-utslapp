//CSS
import styled from "styled-components";
import { flex, colors } from '../../styles/partials'
//react hooks
import { useState, useEffect } from "react";
//charts
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartOptions from './ChartOptions';

const Container = styled.section`
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

const BarChart = ({ emissions }) => {

  const [options, setOptions] = useState(ChartOptions())

    return (
        <Container>
            <ChartContainer>
                {/* <Bar
                    data={chartData}
                    options={options}
                    plugins={[ChartDataLabels]}
                /> */}
            </ChartContainer>
        </Container>
    )
}

export default BarChart