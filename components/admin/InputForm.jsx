//CSS
import styled from "styled-components"
import { flex, colors, fontSizes } from '../../styles/partials'
//firebase
import { getDatabase, ref, update } from "firebase/database";
//components
import InputContainer from "./InputContainer"
// import ToggleSwitch from './ToggleSwitch'
//react hooks
import { useState } from "react"

const Form = styled.form`
    ${flex()};
    gap: 5px;
    width: 100%;
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
        background-color: black;
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

    const {id, details, name} = pageElements
    const {show, sections} = details
    const {body, title, subheading} = sections

    const [showSection, setShowSection] = useState(false)
    const [visible, setVisible] = useState(show)

    const handleShowClick = (e) => {
        e.preventDefault()
        setShowSection(!showSection)
    }

    const showOrHidePage = (index, bool) => {
        const db = getDatabase()
        const dbRef = ref(db, `/admin/${index}/details`)
        update(dbRef, {show: bool})
    }

    const handleVisibility = (index) => {
        showOrHidePage(index, !visible)
        setVisible(!visible)
    } 

    return (
        <Form>
            <div>
                <h3>{name}</h3>
                <button onClick={(e) => handleShowClick(e)}>{showSection ? 'Visa mindre' : 'Visa mer'}</button>
            </div>
            <ToggleSwitch htmlFor={`switch-${id}`}>
                <input onChange={() => handleVisibility(id-1)} type="checkbox" id={`switch-${id}`} checked={visible ? true : false} />
                <span className="slider round"></span>
            </ToggleSwitch>
            {showSection && (
                <>
                <InputContainer pageElements={pageElements} input={title} label={'Rubrik'} />
                <InputContainer pageElements={pageElements} input={subheading} label={'Underrubrik'} />
                {body.map((body, i) => {
                    return (
                        <InputContainer pageElements={pageElements} input={body} label={`Brödtext ${i+1}`} bodyIndex={i} />
                    )
                })}
                </>
            )}

        </Form>
    )
}

export default InputForm