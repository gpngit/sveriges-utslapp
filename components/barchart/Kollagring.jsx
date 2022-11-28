//CSS
import styled, {css} from "styled-components";
import { flex, colors, fonts, size } from '../../styles/partials'
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
    padding: 30px 0px;
`
const ChartContainer = styled.div`
    position: relative;
    height: 50vh;
    width: 80vw;
    max-width: 800px;
`
const ButtonContainer = styled.div`
  padding: 20px 0px;
  ${flex('row', 'center', 'center')};
  gap: 10px;

  @media (max-width: ${size.tablet}) {
    ${flex('column')}
  }
`
const CheckboxContainer = styled.label`
  width: 200px;
  ${flex('row', 'space-between', 'center')};
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  .labeltext {
    ${fonts.footnote};
  }
`
const Checkbox = styled.input.attrs({type: 'checkbox'})`
  display: none;

  &:hover ~ .checkmark {
    background-color: #ccc;
  }

  &:checked ~ .checkmark {

    ${props => props.bio && css`
      background-color: ${colors.bio};
    `}

    ${props => props.fossil && css`
      background-color: ${colors.fossil};
    `}
  }

  &:checked ~ .checkmark:after {
    display: block;
  }
`
const CheckMark = styled.span`
  ${flex('row', 'center', 'center')};
  height: 30px;
  width: 30px;
  background-color: #eee;
  border-radius: 5px;

  &:after {
    content: "";
    display: none;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
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

    useEffect(() => {
        setChartData({
            labels: [''],
            datasets: [{
            label: 'Fossila utsläpp',
            data: yearlyFossilEmissions.map(data => data.value),
            fill: true,
            backgroundColor: colors.fossil,
            borderColor: colors.border,
            borderWidth: 5,
            stack: 'Stack 0'
            },{
            label: 'Biogena utsläpp',
            data: yearlyBioEmissions.map(data => data.value),
            backgroundColor: colors.bio,
            borderColor: colors.border,
            fill: true,
            borderWidth: 5,
            stack: 'Stack 0'
            },{
            label: 'Markanvändning',
            data: yearlyLandUse.map(data => -(data.value)),
            backgroundColor: 'white',
            fill: true,
            borderColor: colors.border,
            borderWidth: 5,
            stack: 'Stack 1'
            }]
        })
    }, [yearlyBioEmissions, yearlyFossilEmissions])

    const handleCheckbox = (e) => {
      let clickedDatasetIndex = e.target.dataset.index
      let chartDatasets = canvas.current.legend.chart._sortedMetasets
      let {checked} = e.target
  
      if (checked) {
        chartDatasets[clickedDatasetIndex].hidden = false
      } else {
        chartDatasets[clickedDatasetIndex].hidden = true
      }
      canvas.current.legend.chart.update(); 
    }

    return (
        <Container id='bar-chart'>
            <ButtonContainer>
              <CheckboxContainer>
                <span className="labeltext">FOSSIL CO2</span>
                <Checkbox fossil onChange={(e) => handleCheckbox(e)} data-index={0} defaultChecked/>
                <CheckMark className="checkmark" />
              </CheckboxContainer>
              <CheckboxContainer>
                <span className="labeltext">BIOGEN CO2</span>
                <Checkbox bio onChange={(e) => handleCheckbox(e)} id="biogena-checkbox" data-index={1} defaultChecked/>
                <CheckMark className="checkmark" />
              </CheckboxContainer>
            </ButtonContainer>
                <ChartContainer>
                    {chartData && (
                        <Bar ref={canvas} data={chartData} options={options}/>
                    )}
                </ChartContainer>
        </Container>
    )
}

export default Kollagring