//CSS
import styled, {css} from "styled-components";
import { flex, colors, fonts, size } from '../../styles/partials'
//react hooks
import { useState, useEffect, useRef } from "react";
//charts
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
    width: 70%;
    max-width:1300px;
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
  width: 100%;
  min-width: 260px;
  ${flex('row', 'flex-end', 'flex-end')};
  gap: 6px;
  padding: 20px 0px;
  color: ${colors.bio};

  @media (min-width: ${size.tablet}) {
  display: none;
  }
`
const ButtonContainer = styled.div`
  padding: 20px 0px;
  ${flex('row', 'center', 'center')};
  gap: 10px;

  @media (max-width: ${size.tablet}) {
    display: none;
  }
`
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: white;
  color: ${colors.secondary};

  ${props => props.bio && css`
    background-color: ${colors.bio};
    color: white;
  `}

  ${props => props.fossil && css`
    background-color: ${colors.fossil};
    color: white;
  `}

  &.active {
    text-decoration: line-through;
    filter: brightness(90%);
  }

  &:hover {
    filter: brightness(90%);
  }
`

const BarChart = ({ emissions }) => {

    const canvas = useRef()
    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [options, setOptions] = useState(ChartOptions())
    const [chartData, setChartData] = useState({
        datasets: [],
      })
    const [yearlyBioData, setYearlyBioData] = useState(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-BIO').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4"))
    const [yearlyFossilData, setYearlyFossilData] = useState(emissions.filter(emission => emission.year === displayYear).filter(emission => emission.type.val === 'CO2-ekv.').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4"))

    useEffect(() => {
        setChartData({
            labels: yearlyFossilData.map(data => data.sector.text), // inte idealt men namnen är för långa
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
        setYearlyBioData(emissions.filter(emission => emission.year == displayYear).filter(emission => emission.type.val === 'CO2-BIO').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4" && emission.sector.val !== "10.0"))
        setYearlyFossilData(emissions.filter(emission => emission.year == displayYear).filter(emission => emission.type.val === 'CO2-ekv.').filter(emission => emission.sector.val !== "0.1" && emission.sector.val !== "0.2" && emission.sector.val !== "0.3" && emission.sector.val !== "0.4" && emission.sector.val !== "10.0"))
    }, [displayYear])

    useEffect(() => {
        setChartData({
            labels: yearlyFossilData.map(data => data.sector.text), // inte idealt men namnen är för långa
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

    const handleDataVisibility = (e) => {
        let clickedDatasetIndex = e.target.dataset.index
        let chartDatasets = canvas.current.legend.chart._sortedMetasets
    
        chartDatasets.forEach(dataset => {
          if (dataset.index == clickedDatasetIndex) {
            if (dataset.hidden === true) {
              dataset.hidden = false
            } else {
              dataset.hidden = true
            }
          }
        });
        e.target.classList.toggle('active')
        canvas.current.legend.chart.update();  
      }

    return (
        <Container id='bar-chart'>
            <Scrolltext>
                <p>Scrolla för att se sektorer</p>
                <SmallArrow color={colors.bio} size={16} />
            </Scrolltext>
            <ButtonContainer>
            <Button bio data-index={0} onClick={(e) => handleDataVisibility(e)}>Biogena utsläpp</Button>
            <Button fossil data-index={1} onClick={(e) => handleDataVisibility(e)}>Fossila utsläpp</Button>
            </ButtonContainer>
            <ScrollContainer>
                <ChartContainer>
                    {chartData && (
                        <Bar ref={canvas}
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