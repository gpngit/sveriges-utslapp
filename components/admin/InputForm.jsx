//CSS
import styled from "styled-components"
import { flex, colors, fontSizes } from '../../styles/partials'
//components
import InputContainer from "./InputContainer"

const Form = styled.form`
    ${flex()};
    gap: 5px;
    width: 100%;
`


const InputForm = ({ pageElements }) => {

    const {id, details, name} = pageElements
    const {show, sections} = details
    const {body, title, subheading} = sections

    return (
        <Form>
            <h3>{name}</h3>
            <InputContainer name={name} input={title} label={'Rubrik'} />
            <InputContainer name={name} input={subheading} label={'Underrubrik'} />
            {body.map((body, i) => {
                return (
                    <InputContainer name={name} input={body} label={`Brödtext ${i+1}`} />
                )
            })}

        </Form>
    )
}

export default InputForm