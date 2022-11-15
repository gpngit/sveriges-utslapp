//CSS
import styled from 'styled-components'
import { flex, colors} from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Container = styled.div`
    z-index: 10;
    width: 100%;
    position: sticky;
    top: 0;
    ${flex('row', 'space-around', 'center')};
    padding: 20px;
    background-color: ${colors.primary};
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
            <Year>{displayYear}</Year>
            <Button onClick={() => increment()}>Nästa</Button>
        </Container>
    )
}

export default YearChanger