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

const InputContainer = ({ pageElements, label, input, bodyIndex }) => {

    const {id, name, details} = pageElements

    const [editable, setEditable] = useState(false)
    const targetId = id-1

    console.log(details)

    const handleEditClick = (e) => {
        e.preventDefault()
        setEditable(!editable)
    }

    const sendEditToFirebase = (inputType, inputValue, index) => {
        const db = getDatabase()
        if (!bodyIndex) {
            const dbRef = ref(db, `/admin/${targetId}/details/sections/${inputType}`)
            // update(dbRef, {text: inputValue})
        } else {
            const dbRef = ref(db, `/admin/${sectionIndex}/details/sections/${inputType}/${index}`)
            // update(dbRef, {text: inputValue})
        }
    }

    const handleSave = (e, test) => {
        e.preventDefault()
        console.log(test)
    }
    
    return (
        <Container>
            <Label htmlFor={`${name}-title`}>{label}</Label>
            <p>{targetId}</p>
            <div className="input-and-edit">
                <Input readOnly={!editable} id={`${name}-title`} type="text" defaultValue={input.text} />
                {!editable ? (
                    <button onClick={(e) => handleEditClick(e)}>Edit</button>
                ) : (
                    <>
                    <button>Ångra ändring</button>
                    <button onClick={(e) => handleSave(e, targetId)}>Spara</button>
                    </>
                )}
            </div>
        </Container>
    )
}

export default InputContainer