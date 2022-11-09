//CSS
import styled from "styled-components"
import { flex, colors, fontSizes } from '../../styles/partials'
//react hooks
import { useState } from "react"

const Container = styled.div`
    ${flex()};
    width: 100%;

    .input-and-edit {
        ${flex('row')};
        width: 100%;
    }
`
const Input = styled.input`
    width: 100%;
    padding: 10px;
`
const Label = styled.label`

`

const InputContainer = ({ name, input, label }) => {

    const [editable, setEditable] = useState(false)

    const handleEditClick = (e) => {
        e.preventDefault()
        setEditable(!editable)
    }
    
    return (
        <Container>
            <Label htmlFor={`${name}-title`}>{label}</Label>
            <div className="input-and-edit">
                <Input readOnly={!editable} id={`${name}-title`} type="text" defaultValue={input.text} />
                <button onClick={(e) => handleEditClick(e)}>Edit</button>
            </div>
        </Container>
    )
}

export default InputContainer