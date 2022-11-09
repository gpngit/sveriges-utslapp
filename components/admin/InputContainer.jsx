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

const InputContainer = ({ input, inputIndex, sectionId, sectionName }) => {

    const targetId = sectionId-1

    const [editable, setEditable] = useState(false)

    const handleEditClick = (e) => {
        e.preventDefault()
        setEditable(!editable)
    }

    const sendEditToFirebase = (inputValue) => {
        const db = getDatabase()
        const dbRef = ref(db, `/admin/${targetId}/sections/${inputIndex}`)
        update(dbRef, {text: inputValue})
    }

    const handleSave = (e) => {
        e.preventDefault()
        let inputValue = document.querySelector(`#${sectionName}-${input.name}`)
        sendEditToFirebase(inputValue.value)
        setEditable(!editable)
    }

    const handleDiscard = (e) => {
        e.preventDefault()
        let inputValue = document.querySelector(`#${sectionName}-${input.name}`)
        inputValue.value = input.text
        setEditable(!editable)
    }
    
    return (
        <Container>
            <Label htmlFor={`${sectionName}-${input.name}`}>{input.name}</Label>
            <div className="input-and-edit">
                <Input readOnly={!editable} id={`${sectionName}-${input.name}`} type="text" defaultValue={input.text} />
                {!editable ? (
                    <button onClick={(e) => handleEditClick(e)}>Edit</button>
                ) : (
                    <>
                    <button onClick={(e) => handleDiscard(e)}>Ångra ändring</button>
                    <button onClick={(e) => handleSave(e)}>Spara</button>
                    </>
                )}
            </div>
        </Container>
    )
}

export default InputContainer