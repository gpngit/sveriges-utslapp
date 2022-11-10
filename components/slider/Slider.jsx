//CSS
import styled from 'styled-components'
import { flex, colors } from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Container = styled.div`
    padding: 30px 50px;
    background-color: ${colors.mainBackGround};
`
const SliderContainer = styled.form`
    ${flex()};
    width: 100%;

    .slider {
        width: 100%;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;

        &:hover, &:focus {
            opacity: 1;
        }
    }

    .slider-labels {
        width: 100%;
        ${flex('row', 'space-between', 'center')}

        p {
            font-size: 8px;
        }
    }
`

const Slider = ({ emissions }) => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])


    console.log(displayYear)
    return (
        <Container>
            <SliderContainer>
                {/* <label htmlFor="slider">Ändra årtal:</label> */}
                <input 
                id="slider"
                className='slider' 
                type={'range'} 
                max={years[years.length-1]}
                min={years[0]}
                aria-label="Dra för att ändra årtal"
                value={displayYear} 
                onChange={(e) => setDisplayYear(e.target.value)} 
                />
                <span className='slider-labels'>
                    {years.map(year => <p key={year}>{year}</p>)}
                </span>
            </SliderContainer>
        </Container>
    )
}

export default Slider