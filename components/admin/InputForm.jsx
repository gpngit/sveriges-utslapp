//CSS
import styled from "styled-components"
import { flex, fonts, colors, fontSizes } from '../../styles/partials'
//firebase
import { getDatabase, ref, update } from "firebase/database";
//components
import InputContainer from "./InputContainer"
import LoadingSpinner from "../loader/LoadingSpinner";
import { capitalize } from "../helpers/Capitalize";
// import ToggleSwitch from './ToggleSwitch'

//react hooks
import { useState } from "react"

const Form = styled.form`
    ${flex()};
    gap: 5px;
    width: 100%;
    background-color: #ffff;
    padding:1rem;
    max-width:800px;
`
const TitleAndReveal = styled.div`
${flex("row", "space-between", "flex-end")}
gap:1rem;
h3{
    float:right;
}
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
        <Form>
            <TitleAndReveal>
                <h3>{capitalize(name)} sektion</h3>
                <button onClick={(e) => handleShowClick(e)}>{showSection ? 'Visa mindre' : 'Visa mer'}</button>
            </TitleAndReveal>
            <ToggleSwitch htmlFor={`switch-${id}`}>
                <input onChange={() => handleVisibility(id-1)} type="checkbox" id={`switch-${id}`} checked={visible ? true : false} />
                <span className="slider round"></span>
            </ToggleSwitch>
            <p>{show ? 'Information kan ses på sidan' : 'Information visas inte på sidan'}</p>
            {showSection && sections.map((section, i) => {
                return (
                    <InputContainer sectionId={id} key={section.name} input={section} inputIndex={i} sectionName={name} />
                )
            })}
            
        </Form>
    )
}

export default InputForm