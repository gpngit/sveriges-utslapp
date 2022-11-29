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
//components
import Slider from './Slider'
import Image from 'next/legacy/image'
import Square from "../../public/square__filled.svg"

const Container = styled.div`
    ${fonts.footnote};
    z-index: 10;
    width: 100%;
    position: sticky;
    top: 0;
    ${flex('column', 'center', 'center')};
    background-color: ${colors.primary};
    padding-top: 20px;
`
const InnerContainer = styled.div`
    ${flex('row','center', "center")};
    gap: 10px;

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
    border: 2px solid ${colors.secondary};
    border-radius: 10px;
    padding: 0px 12px;
    height: 40px;
`
const Decoration = styled.div`
width: calc(100vw - 40px);
margin-top:1rem;
top:80px;
`
const SquareImg = styled(Image)`
top:-20px;
z-index:12;
`

const Line = styled.div`
width:100%;
background-color: ${colors.secondary};
height:1px;
z-index:10;
position: absolute;
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
    }, [displayYear, firstYear, latestYear])

    return (
        <Container>
                <InnerContainer>
                <Button onClick={() => setDisplayYear(firstYear)}>{firstYear}</Button>
                    <div onClick={() => decrement()}>
                        <Chevron 
                        color={colors.secondary} 
                        size={20} 
                        direction={'left'} 
                        stroke={5} />
                        <p 
                        className={reachedBeginning ? 'inactive' : null}>{displayYear-1}</p>
                    </div>
                    <Year>{displayYear}</Year>
                    <div onClick={() => increment()}>
                        <p 
                        className={reachedEnd ? 'inactive' : null}>
                            {displayYear+1}</p>
                        <Chevron 
                        color={colors.secondary} 
                        size={20} 
                        direction={'right'} 
                        stroke={5}  />
                    </div>
                <Button onClick={() => setDisplayYear(latestYear)}>{latestYear}</Button>
            </InnerContainer>
            <Decoration>
                <Line
                className='decor-line'/>
                </Decoration>
            <SquareImg
                src={Square}
                alt="Square"
                height={30}
                width={30}
            />
            {/* <Slider firstYear={firstYear} latestYear={latestYear} /> */}
        </Container>
    )
}

export default YearChanger