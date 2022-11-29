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
//components
import Slider from './Slider'
import Image from 'next/legacy/image'
import Square2 from "../../public/Square.svg";
import { Square } from './Square'

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
    ${flex('row','space-between', "center")};
    gap: 10px;
    width: calc(100vw - 80px);
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
    p{display:none}
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

&.hidden {
    visibility: hidden;
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
    &:hover{
        background-color: rgba(55, 0, 0, 0.1);
    }
`
const Decoration = styled.div`
width: calc(100vw - 40px);
margin-top:1rem;
top:80px;
`
const SquareImg = styled(Image)`
`
const Line = styled.div`
width:100%;
background-color: ${colors.secondary};
height:1px;
z-index:10;
`
const Empty = styled.span`
display:none;
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
                <Middle>
                    <div onClick={() => decrement()}>
                        <ChevronButts className={reachedBeginning ? 'hidden' : ''}>
                            <Chevron 
                            color={colors.secondary} 
                            size={10} 
                            direction={'left'} 
                            stroke={10} />
                        </ChevronButts>
                        <p className={reachedBeginning ? 'inactive' : null}>{displayYear-1}</p>
                    </div>
                    <Year>{displayYear}</Year>
                    <div onClick={() => increment()}>
                        <p className={reachedEnd ? 'inactive' : null}>
                         {displayYear+1}</p> 
                        <ChevronButts className={reachedEnd ? 'hidden' : ''}>
                            <Chevron 
                            color={colors.secondary} 
                            size={10} 
                            direction={'right'} 
                            stroke={10}  />
                        </ChevronButts>
                    </div>
                    </Middle>
                <Button onClick={() => setDisplayYear(latestYear)}>{latestYear}</Button>
            </InnerContainer>
            <Decoration>
                <Line
                className='decor-line'/>
                </Decoration>
                <Square 
                className="squareElement"
                color={`${colors.secondary}`}
                strokeWidth={"3"} fillColor={`${colors.primary}`}
                height={30}
                width={30}/>
            {/* <Slider firstYear={firstYear} latestYear={latestYear} /> */}
        </Container>
    )
}

export default YearChanger