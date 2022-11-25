//CSS
import styled from 'styled-components'
import { flex, colors, fonts } from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
//resources
import Chevron from '../SVG\'s/Chevron'
//nextjs components
import Image from "next/image";

const Container = styled.div`
    ${fonts.footnote};
    z-index: 10;
    
    width: 100%;
    position: sticky;
    top: 0;
    ${flex('row', 'space-between', 'center')};
    background-color: ${colors.primary};
    gap: 20px;
    padding: 20px;
  
`
const InnerContainer = styled.div`
    ${flex('row', 'space-between', 'center')};
    flex-basis: 60%;
    max-width: 200px;

    div {
        ${flex('row', 'space-between', 'center')};
        gap: 5px;
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
    ${fonts.paragraph};
    font-weight: bold;
    padding: 10px;
`
const Button = styled.button`
    background-color: ${colors.primary};
    ${fonts.footnote}
    color: ${colors.secondary};
    border: 3px solid ${colors.secondary};
    border-radius: 10px;
    padding: 0px 16px;
    height: 40px;
`

const YearChanger = ({ emissions }) => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])
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
    }, [displayYear])

    return (
        <>
        <Container>
            <Button onClick={() => setDisplayYear(firstYear)}>{firstYear}</Button>
            <InnerContainer>
                <div onClick={() => decrement()}>
                    <Chevron color={colors.secondary} size={20} direction={'left'} stroke={5} />
                    <p className={reachedBeginning ? 'inactive' : null}>{displayYear-1}</p>
                </div>
                <Year>{displayYear}</Year>
                <div onClick={() => increment()}>
                    <p className={reachedEnd ? 'inactive' : null}>{displayYear+1}</p>
                    <Chevron color={colors.secondary} size={20} direction={'right'} stroke={5}  />
                </div>
            </InnerContainer>
            <Button onClick={() => setDisplayYear(latestYear)}>{latestYear}</Button>
         
        </Container>
    
        </>
    )
}

export default YearChanger