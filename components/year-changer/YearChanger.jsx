//CSS
import styled from 'styled-components'
import { flex, colors} from '../../styles/partials'
//react hooks
import { useState, useEffect } from 'react'
//context
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Container = styled.div`
    position: sticky;
    ${flex('row', 'center', 'center')};
    min-height: 100px;
    padding: 30px;
    background-color: ${colors.primary};
`
const Year = styled.span`
    font-size: 30px;
    font-weight: bold;
`
const Button = styled.button`
    background-color: transparent;
    color: ${colors.secondary};
    border: 3px solid ${colors.secondary};
    border-radius: 10px;
    width: 120px;
    height: 50px;
`

const YearChanger = () => {

    const context = useContext(AppContext)
    const {displayYear, setDisplayYear} = context

    return (
        <Container>
            <Button>Föregående</Button>
            <Year>{displayYear}</Year>
            <Button>Nästa</Button>
        </Container>
    )
}

export default YearChanger