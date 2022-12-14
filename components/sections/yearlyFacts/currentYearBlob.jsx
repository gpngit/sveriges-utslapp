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
    ${flex("center", "center")}

    p{
      font-size:18px;
      padding:8px;
      transform: rotate(-45deg);
      color: ${colors.secondary};
  }
  @media (max-width:${size.mobileL}){
    width:40px;
    height:40px;

    p{
      font-size:14px;
    }
  }

  @media (max-width:${size.mobileM}){
    margin-left:1rem;
    }
`

const ChosenYear = ({emissions, name}) => {
  const context = useContext(AppContext);
  const {displayYear, setDisplayYear} = context;
  return ( 
    <Square>
    <p>{displayYear}</p>
    </Square>
  )
}
export default ChosenYear

