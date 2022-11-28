//CSS
import styled from 'styled-components'
import { flex, colors, fonts } from '../../styles/partials'
//react hooks
import { useState, useEffect, useRef } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const RangeInput = styled.input.attrs({type: 'range'})`
    -webkit-appearance: none;
    appearance: none;
    width: calc(100vw - 40px);
    background-color: transparent;
    margin-top: 20px;

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

    const sliderRef = useRef()
    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context

    const handleSlide = (e) => {
        console.log(e.target.value)
        setDisplayYear(Number(e.target.value))
    }

    useEffect(() => {
        sliderRef.current.value = displayYear
    }, [displayYear])

    return (
        <RangeInput 
        ref={sliderRef}
        min={firstYear}
        max={latestYear}
        onChange={(e) => handleSlide(e)}
        />
    )
}

export default Slider