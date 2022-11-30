import styled from 'styled-components'
import { flex, colors, size, fonts, device } from "/styles/partials"
import { useState, useEffect, useRef } from "react";
import { useContext } from 'react'
import AppContext from '../../../context/AppContext';

const FrameYear = styled.span`
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
position:relative;
height:60px;
background-color: ${colors.secondary};
@media (max-width: ${size.mobileS}){
  margin-left:-2rem;
  width:50%;
}
@media ${device.mobileS}{
  width:100px;
  margin-left:-2rem;
}
@media ${device.mobileM}{
  height:60px;
  width:80px;
}
@media ${device.mobileL}{ 
  margin-left:0;
  width:80px;
}

@media ${device.tablet}{
  margin-left:0;
  width:60px;
  height:60px;
}
`

const Year = styled.span`
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
top: 3px;
left: 3px;
right: 3px;
bottom: 3px;
position: absolute;
background-color: ${colors.primary};
${flex("center", "center")};
h4{
    font-size:13px;
    position: absolute;
    top:30%;
    color: ${colors.secondary};

    @media (max-width: ${size.mobileS}){
    font-size:11px;
    top:32%;
    }
    @media ${device.mobileM}{
    font-size:11px;
    }
    @media ${device.mobileL}{ 
    font-size:13px;
    }
}
`
const ChosenYear = ({emissions, name}) => {
  console.log(name, "name")
  const context = useContext(AppContext);
  const {displayYear, setDisplayYear} = context;
  console.log(displayYear, "year")
  return ( 
  <FrameYear>
    <Year>
      {name !== "fakta-biobransle" ? ( <h4>{displayYear}</h4>):(
      <>
      {displayYear >= 2005 && displayYear <= 2020 ? (<h4>{displayYear}</h4>):(null) }
    
      </> )}
   
    </Year>
  </FrameYear> );
}
export default ChosenYear