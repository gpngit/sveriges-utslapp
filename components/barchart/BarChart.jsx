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
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

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

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [options, setOptions] = useState(ChartOptions())
    const [chartData, setChartData] = useState(null)
    const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])

    console.log(displayYear)

    useEffect(() => {
        setChartData({
            labels: [1,2,3],
            datasets: [{
            label: 'Test',
            data: [10000, 20000, 30000],
            backgroundColor: '#00d084',
            borderWidth: 0,
            pointRadius: 0,
            tension: .5,
            }]
        })
    }, [])

    return (
        <Container>
            <ChartContainer>
                {chartData && (
                    <Bar
                        data={chartData}
                        options={options}
                        // plugins={[ChartDataLabels]}
                    />
                )}
            </ChartContainer>
        </Container>
    )
}

export default BarChart