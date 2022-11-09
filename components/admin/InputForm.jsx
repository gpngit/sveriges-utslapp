//CSS
import styled from "styled-components"
import { flex, colors, fontSizes } from '../../styles/partials'

const Form = styled.form`
    ${flex()};
    width: 100%;
`
const InputContainer = styled.div`
    ${flex()};
    width: 100%;
`
const Input = styled.input`
    width: 100%;
    padding: 10px;
`
const Label = styled.label`

`

const InputForm = ({ pageElements }) => {

    const {id, details, name} = pageElements
    const {show, sections} = details
    const {body, title, subheading} = sections

    return (
        <Form>
            <h3>{name}</h3>
            <InputContainer>
                <Label htmlFor={`${name}-title`}>Rubrik</Label>
                <Input id={`${name}-title`} type="text" defaultValue={title.text} />
            </InputContainer>
            <InputContainer>
                <Label htmlFor={`${name}-subheading`}>Underrubrik</Label>
                <Input id={`${name}-subheading`} type="text" defaultValue={subheading.text} />
            </InputContainer>
            {body.map((section, i) => {
                return (
                    <InputContainer>
                        <Label htmlFor={`${name}-body${i}`}>Brödtext {i+1}</Label>
                        <Input key={i} id={`${name}-body${i}`} type="text" defaultValue={section.text} />
                    </InputContainer>
                )
            })}

        </Form>
    )
}

export default InputForm