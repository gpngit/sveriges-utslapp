//CSS
import styled from 'styled-components'
import { flex, colors, fonts, size } from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
//resources
import Chevron from '../SVG\'s/Chevron'

const Container = styled.div`
    ${fonts.footnote};
    z-index: 10;
    width: 100%;
    position: sticky;
    top: 0;
    ${flex('column', 'center', 'center')};
    background-color: ${colors.primary};
    padding-top: 5px;
`
const InnerContainer = styled.div`
    ${flex('row','space-between', "center")};
    gap: 10px;
    width: calc(100vw - 80px);
    @media (max-width:${size.mobileM}){
        gap:2px;
        width:90vw;
    }
    
    div {
        ${flex('row', 'space-between', 'center')};
        gap: 6px;
        cursor: pointer;

        p {
            font-size: .8rem; 
            line-height:150%;
        }
    }

    .inactive {
        text-decoration: line-through;
    }
`
const Year = styled.span`
    ${fonts.subheading};
    font-weight: bold;
    padding: 10px;
    color: ${colors.secondary};
`
const Middle = styled.span`
    ${flex("row", "center", "center")};
    p{
        color:${colors.secondary};
        font-weight:bold;    
    }
    @media (max-width: 500px){
        p{
            display:none
        }
    }
`
const ChevronButts = styled.button`
    border-radius:9px;
    width:30px;
    ${flex("center", "center")}
    padding:8px 8px;
    background-color:transparent;
    border-color:${colors.secondary};
    &:hover{
        background-color: rgba(55, 0, 0, 0.1);
    }
    &:focus{
        background-color: rgba(55, 0, 0, 0.3);
    }

    &.hidden {
        visibility: hidden;
    }
    &:active{
        background-color: rgba(55, 0, 0, 0.3);
    }
`
const Button = styled.button`
    background-color: ${colors.primary};
    ${fonts.footnote};
    font-weight:bold;
    color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    border-radius: 10px;
    padding: 0px 12px;
    height: 40px;
    margin-top:4px;
    &:hover{
        background-color: rgba(55, 0, 0, 0.1);
    }
    &:active{
        background-color: rgba(55, 0, 0, 0.3);
    }
    &:focus{
        background-color: rgba(55, 0, 0, 0.3);
    }
    `
const Decoration = styled.div`
    position: relative;
    width: calc(100vw - 20px);
    margin-top: 10px;
`
const Line = styled.div`
    width:100%;
    background-color: ${colors.secondary};
    height:2px;
    z-index:10;
`
const Square = styled.span`
    width: 20px;
    height:20px;
    border: 2px solid ${colors.secondary};
    background-color: ${colors.primary};
    transform: rotate(45deg);
    position: absolute;
    top: -10px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
`
const Change = styled.div`
    &:hover{
        background-color: rgba(55, 0, 0, 0.1);
        border-radius:9px;
    }
    &:focus{
        background-color: rgba(55, 0, 0, 0.1);
        border-radius:9px;
    }
    &:active{
        background-color: rgba(55, 0, 0, 0.1);
        border-radius:9px;
    }
`

const YearChanger = ({ emissions }) => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const years = [... new Set(emissions.map(emission => emission.year))]
    const latestYear = Number(years[years.length-1])
    const firstYear = Number(years[0])
    const [reachedBeginning, setReachedBeginning] = useState(true)
    const [reachedEnd, setReachedEnd] = useState(false)

    const increment = () => {
        if (displayYear != latestYear){
            setDisplayYear(displayYear+1)
        }
    }

    const decrement = () => {
        if (displayYear != firstYear){
            setDisplayYear(displayYear-1)
        }
    }

    useEffect(() => {
        displayYear == firstYear ? setReachedBeginning(true) : setReachedBeginning(false)
        displayYear == latestYear ? setReachedEnd(true) : setReachedEnd(false)
    }, [displayYear, firstYear, latestYear])

    return (
    <Container>
        <InnerContainer>
        <Button 
        role="button"
        onClick={() => setDisplayYear(firstYear)}>{firstYear}
        </Button>
        <Middle>
            <Change onClick={() => decrement()}
            role="button"
            aria-label="Gå bakåt ett år">
                <ChevronButts 
                className={reachedBeginning ? 'hidden' : ''}>
                    <Chevron 
                    role="img"
                    color={colors.secondary} 
                    size={10} 
                    direction={'left'} 
                    stroke={10} 
                    />
                </ChevronButts>
                <p className={reachedBeginning ? 'inactive' : null}>{displayYear-1}
                </p>
            </Change>
            <Year>{displayYear}</Year>
            <Change onClick={() => increment()}
            aria-label="Gå framåt ett år"
            role="button">
                <p className={reachedEnd ? 'inactive' : null}>
                {displayYear+1}</p> 
                <ChevronButts 
                className={reachedEnd ? 'hidden' : ''}>
                    <Chevron 
                    role="img"
                    color={colors.secondary} 
                    size={10} 
                    direction={'right'} 
                    stroke={10}  />
                </ChevronButts>
            </Change>
        </Middle>
        <Button onClick={() => setDisplayYear(latestYear)}>{latestYear}</Button>
        </InnerContainer>
        <Decoration>
            <Line className='decor-line'/>
            <Square />
        </Decoration>
    </Container>
    )
}

export default YearChanger