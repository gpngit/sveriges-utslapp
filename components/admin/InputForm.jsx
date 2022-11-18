//CSS
import styled from "styled-components"
import { flex,device, fonts, colors} from '../../styles/partials'

//firebase
import { getDatabase, ref, update } from "firebase/database";

//components
import InputContainer from "./InputContainer"
import LoadingSpinner from "../loader/LoadingSpinner";
import { capitalize } from "../helpers/Capitalize";
import Image from "next/image";
import arrow from "../../public/arrow_down.png"
// import ToggleSwitch from './ToggleSwitch'

//react hooks
import { useState } from "react"



const Form = styled.form`
width: 100%;
background-color:${props => props.hide ? `#e2e2e2` : "white"};
${flex()};
gap: 5px;
max-width:1200px;
padding:1rem;
`

const TitleAndReveal = styled.div`
width:100%;
${flex("column", "center", "center")}
gap:10px;
@media screen and ${device.tablet}{
    ${flex("row", "space-between", "center")}
}
h3{
    ${fonts.paragraph};
}

button{
    position:relative;
    right:0%;
    ${fonts.footnote};
    padding: 4px 6px;
    background-color: ${colors.bio};
    color: white;
    border:none;    
    &:hover{
        background-color:${colors.secondary};
        box-shadow: 0 0 1px ${colors.border};
    }
    &:focus{
        background-color: ${colors.fossil};
    }
    &:active{
        background-color:${colors.secondary};
    }
}
`
const Up = styled(Image)`
transform: rotate(180deg);`

const Row = styled.div`
${flex("row", "space-between", "center")}
gap:1rem;
`
const ToggleSwitch = styled.label`
    position: relative;
    width: 60px;
    height: 34px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: grey;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: green;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

`

const InputForm = ({ pageElements }) => {


    const {id, name, show, sections} = pageElements

    const [showSection, setShowSection] = useState(false)
    const [visible, setVisible] = useState(show)

    const handleShowClick = (e) => {
        e.preventDefault()
        setShowSection(!showSection)
    }

    const showOrHidePage = (index, bool) => {
        const db = getDatabase()
        const dbRef = ref(db, `/admin/${index}`)
        update(dbRef, {show: bool})
    }
  
    const handleVisibility = (index) => {
        showOrHidePage(index, !visible)
        setVisible(!visible)
    } 

    return (
        <Form className="form"
        >
            <TitleAndReveal>
                <h3>{capitalize(name)}</h3>
                <Row>
            <ToggleSwitch 
            aria-label="Stäng av/Sätt på en sektion"
            type="button"
            htmlFor={`switch-${id}`}>
                <input onChange={() => handleVisibility(id-1)} 
                type="checkbox" 
                id={`switch-${id}`} 
                checked={visible ? true : false} />
                <span 
                className="slider round"></span>
            </ToggleSwitch>
            <p>{show ? 'Information kan ses på sidan' : 'Information visas inte på sidan'}</p></Row>
                <button onClick={(e) => handleShowClick(e)}>{showSection ? 
                <Up alt="Visa mindre"
                type="Button"
                aria-label="Visa mindre" 
                src={arrow}
                width={20}
                height={10}/>
                :  (
                <Image alt="Visa mer"
                type="Button"
                aria-label="Visa mer" 
                src={arrow}
                width={20}
                height={10}/>)}</button>
            </TitleAndReveal>
           
            {showSection && sections.map((section, i) => {
                return (
                    <InputContainer sectionId={id} key={section.name} 
                    input={section} inputIndex={i} 
                    sectionName={name} 
                    />
                )
            })}
            
        </Form>
       
    )
}

export default InputForm