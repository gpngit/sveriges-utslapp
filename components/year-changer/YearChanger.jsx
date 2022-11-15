//CSS
import styled from 'styled-components'
import { flex, colors} from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'
//resources
import Chevron from '../../public/Chevron'
//nextjs components
import Image from "next/image";

const Container = styled.div`
    z-index: 10;
    width: 100%;
    position: sticky;
    top: 0;
    ${flex('row', 'space-around', 'center')};
    padding: 20px;
    background-color: ${colors.primary};
`
const InnerContainer = styled.div`
    ${flex('row', 'space-around', 'center')};
    gap: 30px;

    div {
        ${flex('row', 'space-around', 'center')};
        gap: 10px;
    }
`
const Year = styled.span`
    font-size: 30px;
    font-weight: bold;
`
const Button = styled.button`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border: 3px solid ${colors.secondary};
    border-radius: 10px;
    width: 120px;
    height: 50px;
`

const YearChanger = ({ emissions }) => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context
    const [years, setYears] = useState([... new Set(emissions.map(emission => emission.year))])
    const latestYear = years[years.length-1]
    const firstYear = years[0]

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

    return (
        <Container>
            <Button onClick={() => decrement()}>Föregående</Button>
            <InnerContainer>
                <div>
                    <Chevron color={colors.secondary} size={30} direction={'left'} />
                    <p>{displayYear-1}</p>
                </div>
                <Year>{displayYear}</Year>
                <div>
                    <p>{displayYear+1}</p>
                    <Chevron color={colors.secondary} size={30} direction={'right'} />
                </div>
            </InnerContainer>
            <Button onClick={() => increment()}>Nästa</Button>
        </Container>
    )
}

export default YearChanger