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
const ChartHeader = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

const BarChart = ({ emissions }) => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [options, setOptions] = useState(ChartOptions())
    const [chartData, setChartData] = useState(null)
    const [yearlyBioData, setYearlyBioData] = useState(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-BIO'))
    const [yearlyFossilData, setYearlyFossilData] = useState(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-ekv.'))

    useEffect(() => {
        setChartData({
            labels: yearlyFossilData.map(data => data.sector.val), // inte idealt men namnen är för långa
            datasets: [{
            label: 'Biogena utsläpp',
            data: yearlyBioData.map(data => data.value),
            backgroundColor: '#00d084',
            borderWidth: 0,
            pointRadius: 0,
            tension: .5,
            },{
            label: 'Fossila utsläpp',
            data: yearlyFossilData.map(data => data.value),
            backgroundColor: '#0015d0',
            borderWidth: 0,
            pointRadius: 0,
            tension: .5,
            }]
        })
    }, [])

    useEffect(() => {
        setYearlyBioData(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-BIO'))
        setYearlyFossilData(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-ekv.'))
    }, [displayYear])

    useEffect(() => {
        setChartData({
            labels: yearlyFossilData.map(data => data.sector.val), // inte idealt men namnen är för långa
            datasets: [{
            label: 'Biogena utsläpp',
            data: yearlyBioData.map(data => data.value),
            backgroundColor: '#00d084',
            borderWidth: 0,
            pointRadius: 0,
            tension: .5,
            },{
            label: 'Fossila utsläpp',
            data: yearlyFossilData.map(data => data.value),
            backgroundColor: '#0015d0',
            borderWidth: 0,
            pointRadius: 0,
            tension: .5,
            }]
        })
    }, [yearlyBioData, yearlyFossilData])

    return (
        <Container>
            <ChartHeader>Utsläpp per sektor per år</ChartHeader>
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