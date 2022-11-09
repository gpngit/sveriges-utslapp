//CSS
import styled from "styled-components"
import { flex, colors, fontSizes } from '../../styles/partials'
//components
import InputContainer from "./InputContainer"
//react hooks
import { useState } from "react"

const Form = styled.form`
    ${flex()};
    gap: 5px;
    width: 100%;
`


const InputForm = ({ pageElements }) => {

    const {id, details, name} = pageElements
    const {show, sections} = details
    const {body, title, subheading} = sections

    const [showSection, setShowSection] = useState(false)

    const handleShowClick = (e) => {
        e.preventDefault()
        setShowSection(!showSection)
    }

    return (
        <Form>
            <div>
                <h3>{name}</h3>
                <button onClick={(e) => handleShowClick(e)}>{showSection ? 'Visa mindre' : 'Visa mer'}</button>
            </div>
            {showSection && (
                <>
                <InputContainer name={name} input={title} label={'Rubrik'} />
                <InputContainer name={name} input={subheading} label={'Underrubrik'} />
                {body.map((body, i) => {
                    return (
                        <InputContainer name={name} input={body} label={`Brödtext ${i+1}`} />
                    )
                })}
                </>
            )}

        </Form>
    )
}

export default InputForm