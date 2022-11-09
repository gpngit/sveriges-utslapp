//CSS
import styled from "styled-components"
import { flex, colors, fontSizes } from '../../styles/partials'
//react hooks
import { useState } from "react"
//firebase
import { getDatabase, ref, update } from "firebase/database"

const Container = styled.div`
    ${flex()};
    width: 100%;

    .input-and-edit {
        ${flex('row', 'space-between', 'center')};
        gap: 10px;
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

    const sendEditToFirebase = (sectionIndex, inputType, inputValue) => {
        const db = getDatabase()
        const dbRef = ref(db, `/admin/${sectionIndex}/details/sections/${inputType}`)
        update(dbRef, {text: inputValue})
    }

    console.log(index)
    
    return (
        <Container>
            <Label htmlFor={`${name}-title`}>{label}</Label>
            <div className="input-and-edit">
                <Input readOnly={!editable} id={`${name}-title`} type="text" defaultValue={input.text} />
                {!editable ? (
                    <button onClick={(e) => handleEditClick(e)}>Edit</button>
                ) : (
                    <>
                    <button>Ångra ändring</button>
                    <button>Spara</button>
                    </>
                )}
            </div>
        </Container>
    )
}

export default InputContainer