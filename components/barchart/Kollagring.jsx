//CSS
import styled, {css} from "styled-components";
import { flex, colors, fonts, size, device } from '../../styles/partials'
//react hooks
import { useState, useEffect, useRef } from "react";
//charts
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import ChartOptions from './ChartOptions2';
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
//components
import { SmallArrow } from "../SVG's/Arrows";

const Container = styled.section`
  ${flex('column')};
  gap: 1rem;
  max-width: 600px;
`
const ChartContainer = styled.div`
  position: relative;
  height: 40vh;
  width: 80vw;
  @media ${device.laptop}{
    max-width: 500px;
  }
  @media ${device.laptopL}{
    max-width: 600px;
  }
  
`
const Button = styled.button`
  ${fonts.footnote}
  padding: 1rem 2rem;
  align-self: center;
  background-color: transparent;
  border: 2px solid ${colors.secondary};
 
  border-radius: 1rem;
  color: ${colors.secondary};
  transition: .2s linear;
  &:hover{
    background-color: rgba(55, 0, 0, 0.3);
}
`
const LabelsContainer = styled.div`
  align-self: center;
  ${flex('row')};
  gap: 1rem;
  flex-wrap: wrap;
`
const Label = styled.div`
  ${flex('row-reverse')};
  gap: .2rem;
  color: black;

  div {
    height: 20px;
    width: 20px;
    border-radius:50%;
    margin-top:2px;
  }

  .fossil {
    background-color: ${colors.fossil}
  }
  .bio {
    background-color: ${colors.bio}
  }
  .lulucf {
    background-color: ${colors.green}
  }
`

const Kollagring = ({ emissions }) => {

    const canvas = useRef()
    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [options, setOptions] = useState(ChartOptions())
    const [chartData, setChartData] = useState({
        datasets: [],
      })
    const [yearlyBioEmissions, setYearlyBioEmissions] = useState(emissions
        .filter(emission => emission.year == displayYear)
        .filter(emission => emission.type.val === 'CO2-BIO')
        .filter(emission => emission.sector.val === "0.1"))
    const [yearlyFossilEmissions, setYearlyFossilEmissions] = useState(emissions
        .filter(emission => emission.year == displayYear)
        .filter(emission => emission.type.val === 'CO2-ekv.')
        .filter(emission => emission.sector.val === "0.1"))
    const [yearlyLandUse, setYearlyLandUse] = useState(emissions
        .filter(emission => emission.year == displayYear)
        .filter(emission => emission.type.val === 'CO2-ekv.')
        .filter(emission => emission.sector.val === "10.0"))
    const [yearlyTotalEmissions, setYearlyTotalEmissions] = useState(null)

    useEffect(() => {
        setYearlyBioEmissions(emissions
            .filter(emission => emission.year == displayYear)
            .filter(emission => emission.type.val === 'CO2-BIO')
            .filter(emission => emission.sector.val === "0.1"))
        setYearlyFossilEmissions(emissions
            .filter(emission => emission.year == displayYear)
            .filter(emission => emission.type.val === 'CO2-ekv.')
            .filter(emission => emission.sector.val === "0.1"))
        setYearlyLandUse(emissions
            .filter(emission => emission.year == displayYear)
            .filter(emission => emission.type.val === 'CO2-ekv.')
            .filter(emission => emission.sector.val === "10.0"))
    }, [displayYear])

    const [stackIndex, setStackIndex] = useState('Stack 1')

    useEffect(() => {
      setYearlyTotalEmissions(Number(yearlyBioEmissions[0].value) + Number(yearlyFossilEmissions[0].value))
    }, [yearlyBioEmissions, yearlyFossilEmissions])

    useEffect(() => {
        setChartData({
            labels: [''],
            datasets: [{
            label: 'Fossila utsläpp',
            data: yearlyFossilEmissions.map(data => Number(data.value)),
            fill: true,
            backgroundColor: colors.fossil,
            hoverBackgroundColor: colors.fossil,
            borderColor: colors.border,
            borderWidth: 0,
            stack: 'Stack 1',
            stacked: stackIndex === 'Stack 1' ? true : false
            },{
            label: 'Markanvändning',
            data: yearlyLandUse.map(data => -Number(data.value)),
            backgroundColor: colors.green,
            hoverBackgroundColor: colors.green,
            fill: true,
            borderColor: colors.border,
            borderWidth: 0,
            stack: 'Stack 2',
            stacked: stackIndex === 'Stack 2' ? true : false
            },{
            label: 'Biogena utsläpp',
            data: yearlyBioEmissions.map(data => Number(data.value)),
            backgroundColor: stackIndex === 'Stack 1' ? colors.bio : colors.greenOpaque,
            hoverBackgroundColor: stackIndex === 'Stack 1' ? colors.bio : colors.greenOpaque,
            borderColor: colors.border,
            fill: true,
            borderWidth: 0,
            stack: stackIndex,
            stacked : true
            }]
        })
    }, [yearlyBioEmissions, yearlyFossilEmissions, yearlyTotalEmissions, stackIndex])


    const handleClick = () => {
      if (stackIndex === 'Stack 1'){
        setStackIndex('Stack 2')
      } else {
        setStackIndex('Stack 1')
      }
      canvas.current.legend.chart.update(); 
    }

    return (
        <Container id='bar-chart'>
          <Button onClick={handleClick}>
            {stackIndex === 'Stack 1' ? 'Tryck för hur det hade kunnat se ut om vi inte skövlade skog' : 'Visa mig de faktiska siffrorna'}
          </Button>
          <ChartContainer>
            {chartData && (
                <Bar 
                ref={canvas} 
                data={chartData} 
                options={options} 
                plugins={[ChartDataLabels]}/>
            )}
          </ChartContainer>
          <LabelsContainer>
            <Label>
              <p>Fossil CO2</p>
              <div className="fossil" />
            </Label>
            <Label>
            <p>Biogen CO2</p>
              <div className="bio" />
            </Label>
            <Label>
              <p>Markanvändning (via LULUCF)</p>
              <div className="lulucf" />
            </Label>
          </LabelsContainer>
        </Container>
    )
}

export default Kollagring