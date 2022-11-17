//CSS
import styled from "styled-components";
import { flex, colors, fonts, size } from '../../styles/partials'
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
//components
import { SmallArrow } from "../SVG's/Arrows";

const Container = styled.section`
    color: ${colors.secondary};
    height: 85vh;
`
const ChartContainer = styled.div`
    position: relative;
    height: 80%;
    width: 100%;
    min-width: ${size.tablet};
`
const ScrollContainer = styled.div`
 position: relative;
  height: 100%;
  width: 100%;
  ${flex('row')};
  overflow-x: auto;

  &::-webkit-scrollbar {
      display: none;
  }
`
const Scrolltext = styled.div`
  ${flex('row', 'flex-start', 'flex-end')};
  ${fonts.paragraph}
  gap: 6px;
  position: absolute;
  color: ${colors.bio};
  right: 80px;
  top: 220px;
  max-width: 300px;

  @media (min-width: ${size.tablet}) {
  visibility: hidden;
  }
`
const ButtonContainer = styled.div`
  padding-top: 60px;
  ${flex('row', 'center', 'center')};
  gap: 10px;
`

const BarChart = ({ emissions }) => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [options, setOptions] = useState(ChartOptions())
    const [chartData, setChartData] = useState(null)
    const [yearlyBioData, setYearlyBioData] = useState(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-BIO').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4"))
    const [yearlyFossilData, setYearlyFossilData] = useState(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-ekv.').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4"))

    useEffect(() => {
        setChartData({
            labels: yearlyFossilData.map(data => data.sector.val), // inte idealt men namnen är för långa
            datasets: [{
            label: 'Biogena utsläpp',
            data: yearlyBioData.map(data => data.value),
            backgroundColor: colors.bio,
            borderColor: colors.border,
            borderWidth: 2,
            pointRadius: 0,
            tension: .5,
            },{
            label: 'Fossila utsläpp',
            data: yearlyFossilData.map(data => data.value),
            backgroundColor: colors.fossil,
            borderColor: colors.border,
            borderWidth: 2,
            pointRadius: 0,
            tension: .5,
            }]
        })
    }, [])

    useEffect(() => {
        setYearlyBioData(emissions.filter(emission => emission.year == displayYear).filter(emission => emission.type.val === 'CO2-BIO').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4"))
        setYearlyFossilData(emissions.filter(emission => emission.year == displayYear).filter(emission => emission.type.val === 'CO2-ekv.').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4"))
    }, [displayYear])

    useEffect(() => {
        setChartData({
            labels: yearlyFossilData.map(data => data.sector.val), // inte idealt men namnen är för långa
            datasets: [{
            label: 'Biogena utsläpp',
            data: yearlyBioData.map(data => data.value),
            backgroundColor: colors.bio,
            borderColor: colors.border,
            borderWidth: 2,
            pointRadius: 0,
            tension: .5,
            },{
            label: 'Fossila utsläpp',
            data: yearlyFossilData.map(data => data.value),
            backgroundColor: colors.fossil,
            borderColor: colors.border,
            borderWidth: 2,
            pointRadius: 0,
            tension: .5,
            }]
        })
    }, [yearlyBioData, yearlyFossilData])

    return (
        <Container id='bar-chart'>
            <Scrolltext>
                <p>Scrolla för att se fler sektorer</p>
                <SmallArrow color={colors.bio} size={16} />
            </Scrolltext>
            <ButtonContainer></ButtonContainer>
            <ScrollContainer>
                <ChartContainer>
                    {chartData && (
                        <Bar
                            data={chartData}
                            options={options}
                            // plugins={[ChartDataLabels]}
                        />
                    )}
                </ChartContainer>
            </ScrollContainer>
        </Container>
    )
}

export default BarChart