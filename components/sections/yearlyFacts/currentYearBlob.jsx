import styled from 'styled-components'
import { flex, colors, size, fonts, device } from "/styles/partials"
import { useState, useEffect, useRef } from "react";
import { useContext } from 'react'
import AppContext from '../../../context/AppContext';


const Square = styled.span`
    width:50px;
    height:50px;
    border: 2px solid ${colors.secondary};
    background-color: ${colors.primary};
    transform: rotate(45deg);
    position: absolute;
    left: 0; 
    right: 10; 
    margin-left: 2rem; 
    margin-right: auto; 
    ${flex("center", "center")}
    h4{
      font-size:18px;
      padding:8px;
      transform: rotate(-45deg);
      color: ${colors.secondary};
  }
  @media (max-width:${size.mobileL}){
    width:40px;
    height:40px;
    h4{
      font-size:14px;
    }
  }
`

const ChosenYear = ({emissions, name}) => {
  const context = useContext(AppContext);
  const {displayYear, setDisplayYear} = context;
  return ( 
    <Square>
    <h4>{displayYear}</h4>
    </Square>

  )
}
export default ChosenYear


// const FrameYear = styled.span`
// clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
// position:relative;
// height:100px;
// background-color: ${colors.secondary};
// width:140px;
// @media (max-width:${size.mobileL}){
//   height:80px;
//   width:120px;
// }
// `
// const Year = styled.span`
// clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
// top: 3px;
// left: 3px;
// right: 3px;
// bottom: 3px;
// position: absolute;
// background-color: ${colors.primary};
// ${flex("center", "center")};
// h4{
//     font-size:20px;
//     position:absolute;
//     top:30px;
//     color: ${colors.secondary};
// }
// `

  // {/* <FrameYear>
  //   <Year>
  //     <h4>{displayYear}</h4>
  //     {/* {name !== "fakta-biobransle" ? ( <h4>{displayYear}</h4>):(
  //     <>
  //     {displayYear >= 2005 && displayYear <= 2020 ? (<h4>{displayYear}</h4>):(null) }
    
  //     </> )} */}
   
  //   {/* </Year>
  // </FrameYear> ; */} */}