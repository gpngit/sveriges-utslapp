import styled from 'styled-components'
import { flex, colors, size, fonts, device } from "/styles/partials"
import { useState, useEffect, useRef } from "react";
import { useContext } from 'react'
import AppContext from '../../../context/AppContext';

const FrameYear = styled.span`
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
position:relative;
width:60px;
height:60px;
background-color: ${colors.fossil};
`
const Year = styled.span`
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
top: 5px;
left: 5px;
right: 5px;
bottom: 5px;
position: absolute;
background-color: ${colors.primary};
${flex("center", "center")};
p{
    font-size:12px;
    position: absolute;
    top:30%;
}
`


const ChosenYear = ({emissions}) => {
 
  const context = useContext(AppContext);
  const {displayYear, setDisplayYear} = context;

  return ( <FrameYear>
    <Year>
    <p>{displayYear}</p>
    </Year>
    </FrameYear> );
}
 
export default ChosenYear