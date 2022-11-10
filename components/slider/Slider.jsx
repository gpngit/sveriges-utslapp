//CSS
import styled from 'styled-components'
import { flex, colors } from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'

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

    const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])

    return (
        <Container>
            <SliderContainer>
                {/* <label htmlFor="slider">Ändra årtal:</label> */}
                <input 
                id="slider"
                className='slider' 
                type={'range'} 
                // max={2020}
                // min={1990}
                aria-label="Dra för att ändra årtal"
                // value={year} 
                // onChange={(e) => setYear(e.target.value)} 
                />
                <span className='slider-labels'>
                    {years.map(year => <p key={year}>{year}</p>)}
                </span>
            </SliderContainer>
        </Container>
    )
}

export default Slider