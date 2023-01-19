//CSS
import styled, {css} from "styled-components";
import { flex, colors, fonts, device } from '../../styles/partials'
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
import Chevron from "../SVG's/Chevron"

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
  ${flex('row', 'flex-start', 'center')};
  gap: .4rem;
  ${fonts.footnote};
  font-weight:500;
  padding: 0.8rem 1rem;
  align-self: center;
  background-color: transparent;
  border: 2px solid ${colors.border};
  border-radius: 1rem;
  color: ${colors.border};
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
            .filter(emission => emission.type.val == 'CO2-BIO')
            .filter(emission => emission.sector.val === "0.1"))
        setYearlyFossilEmissions(emissions
            .filter(emission => emission.year == displayYear)
            .filter(emission => emission.type.val == 'CO2-ekv.')
            .filter(emission => emission.sector.val === "0.1"))
        setYearlyLandUse(emissions
            .filter(emission => emission.year == displayYear)
            .filter(emission => emission.type.val == 'CO2-ekv.')
            .filter(emission => emission.sector.val === "10.0"))
    }, [displayYear, emissions])

    const [showPotential, setShowPotential] = useState(true)

    
    useEffect(() => {
      setYearlyTotalEmissions(Number(yearlyBioEmissions.value)[0] + Number(yearlyFossilEmissions.value[0]))
    }, [yearlyBioEmissions, yearlyFossilEmissions])

    useEffect(() => {
      if (showPotential) {
        setChartData({
            labels: [''],
            datasets: [{
            label: 'Fossila utsläpp',
            data: yearlyFossilEmissions.map(data => Number(data.value)),
            fill: true,
            backgroundColor: colors.fossil,
            hoverBackgroundColor: colors.fossil,
            borderColor: `${colors.border}`,
            borderWidth: 0,
            stack: 'Stack 1',
            },{
            label: 'Markanvändning',
            data: yearlyLandUse.map(data => -Number(data.value)),
            backgroundColor: colors.green,
            hoverBackgroundColor: colors.green,
            fill: true,
            borderColor: 'white',
            borderWidth: 3,
            stack: 'Stack 2',
            stacked: true
            },{
            label: 'Biogena utsläpp',
            data: yearlyBioEmissions.map(data => Number(data.value)),
            backgroundColor: colors.greenOpaque,
            hoverBackgroundColor: colors.greenOpaque,
            borderColor: 'white',
            fill: true,
            borderWidth: 0,
            stack: 'Stack 2',
            stacked : true
            }]
        })
      } else {
        setChartData({
          labels: [''],
          datasets: [{
          label: 'Fossila utsläpp',
          data: yearlyFossilEmissions.map(data => Number(data.value)),
          fill: true,
          backgroundColor: colors.fossil,
          hoverBackgroundColor: colors.fossil,
          borderColor: 'white',
          borderWidth: 0,
          stack: 'Stack 1',
          },{
          label: 'Markanvändning',
          data: yearlyLandUse.map(data => -Number(data.value)),
          backgroundColor: colors.green,
          hoverBackgroundColor: colors.green,
          fill: true,
          borderColor: 'white',
          borderWidth: 0,
          stack: 'Stack 2',
          }]
      })
      }
    }, [yearlyBioEmissions, yearlyFossilEmissions, yearlyTotalEmissions, showPotential, yearlyLandUse])

    return (
        <Container 
        id='bar-chart'>
          <Button onClick={() => setShowPotential(!showPotential)}
          aria-label="Visa olika vyer:">
            {!showPotential ? 
            <span>Visa hur det kunnat se ut om vi inte skövlade skog</span> :
            <>
            <Chevron 
            color={`${colors.secondary}`} 
            direction={'left'} 
            size={12} 
            stroke={6} />
            <span>Visa hur det faktiskt sett ut</span>
            </>}
          </Button>
          <ChartContainer>
            {chartData && (
                <Bar 
                aria-label="Graf som visar skillnaden i hur mycket koldioxid som upptas, och hur mycket koldioxid som skulle kunna upptas av skogen. "
                role="img"
                ref={canvas} 
                data={chartData} 
                options={options} 
                plugins={[ChartDataLabels]}/>
            )}
          </ChartContainer>
          <LabelsContainer>
            <Label>
              <label>Fossil <abbr>CO2</abbr></label>
              <div className="fossil" />
            </Label>
            <Label>
              <label>Markanvändning (via <abbr>LULUCF</abbr>)</label>
              <div className="lulucf" />
            </Label>
          </LabelsContainer>
        </Container>
    )
}

export default Kollagring