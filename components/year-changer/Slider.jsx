//CSS
import styled from 'styled-components'
import { flex, colors, fonts } from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const RangeInput = styled.input.attrs({type: 'range'})`
    height: 38px;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    background-color: transparent;

    &:focus {
        outline: none;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 1px;
        cursor: pointer;
        background: ${colors.secondary};
    }

    &::-moz-range-track {
        width: 100%;
        height: 1px;
        cursor: pointer;
        background: ${colors.secondary};
    }

    &:focus::-webkit-slider-runnable-track {
        background: ${colors.secondary};
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        border: 1px solid ${colors.secondary};
        height: 30px;
        width: 30px;
        transform: rotate(45deg);
        background: ${colors.primary};
        cursor: pointer;
        margin-top: -15px;
    }

    &::-moz-range-thumb {
        border: 1px solid ${colors.secondary};
        height: 30px;
        width: 30px;
        transform: rotate(45deg);
        background: ${colors.primary};
        cursor: pointer;
        margin-top: -15px;
    }
`

const Slider = ({ firstYear, latestYear }) => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context

    const handleSlide = (e) => {
        console.log(e.target.value)
        setDisplayYear(Number(e.target.value))
    }

    return (
        <RangeInput 
        min={firstYear}
        max={latestYear}
        defaultValue={displayYear} 
        onChange={(e) => handleSlide(e)}
        />
    )
}

export default Slider