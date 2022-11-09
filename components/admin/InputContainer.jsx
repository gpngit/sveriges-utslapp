//CSS
import styled from "styled-components"
import { flex, colors, fontSizes } from '../../styles/partials'

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

    return (
        <Container>
            <Label htmlFor={`${name}-title`}>{label}</Label>
            <div className="input-and-edit">
                <Input id={`${name}-title`} type="text" defaultValue={input.text} />
                <button>Edit</button>
            </div>
        </Container>
    )
}

export default InputContainer