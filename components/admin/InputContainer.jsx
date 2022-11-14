//CSS
import styled from "styled-components"
import { flex, fonts, colors, fontSizes } from '../../styles/partials'
//react hooks
import { useState, useEffect } from "react"
//firebase
import { getDatabase, ref, update } from "firebase/database"
//components
import LoadingSpinner from "../loader/LoadingSpinner"
import { capitalize } from "../helpers/Capitalize"

const Container = styled.div`
    ${flex()};
    padding:0.3rem;
    width: 100%;
    .input-and-edit {
        ${flex('row', 'space-between', 'center')};
        gap: 10px;
        width: 100%;
    }
    button{
        ${fonts.footnote};
        padding:4px 8px;
        border-radius:9px;
        background-color: ${colors.bio};
        color: white;
        border:none;    
        &:hover{
            background-color:${colors.secondary};
            box-shadow: 0 0 1px ${colors.border};
        }
        &:focus{
            background-color: ${colors.fossil};
        }
        &:active{
            background-color:${colors.secondary};
        }
        
    }
    .discard{
        background-color: ${colors.fossil};
    }
    .spara{
        background-color: ${colors.secondary}; 
        &:hover{
 
            box-shadow: 0 0 1px ${colors.border};
        }
        &:focus{
            background-color: ${colors.bio};
        }
        &:active{
            background-color:${colors.secondary};
        }
    }

`
const Input = styled.input`
    width: 90%;
    padding: 10px;
    ${fonts.footnote};
    border-color: ${colors.bio};
        padding: 10px;
        ${fonts.footnote}
        &:focus{
        outline: none;
        border:2px solid ${colors.bio};
        box-shadow: 0 0 10px ${colors.border};
        }
`
const Label = styled.label`
${fonts.footnote};
margin-bottom:2px;
text-transform: uppercase;
`

const Modal = styled.div`
background-color:${colors.primary};
padding:2rem;
${flex("column")}
gap:10px;
max-width:800px;
`
const Validation =styled.span`
width:80%;
h3{
    ${fonts.footnote};
    margin-top:1rem;
}
p{
    ${fonts.footnote};
}
`

const ModalButtons= styled.span`
${flex("row")}
gap:10px;
margin-top:1rem;
button{
    ${fonts.footnote};
    padding: 6px 6px;
    background-color: ${colors.bio};
    color: white;
    border:none;    
    &:hover{
        background-color:${colors.secondary};
        box-shadow: 0 0 1px ${colors.border};
    }
    &:focus{
        background-color: ${colors.fossil};
    }
    &:active{
        background-color:${colors.secondary};
    }
   }
}

`

const InputContainer = ({ input, inputIndex, sectionId, sectionName }) => {
    const [modal, setModal] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const targetId = sectionId-1
    const [editable, setEditable] = useState(false)
    const [newText, setNewText] = useState(null)

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
        setModal(true)
        setNewText(inputValue.value)
        setEditable(!editable)
    }

    const confirmSave=(e) => {
        e.preventDefault()
        let inputValue = document.querySelector(`#${sectionName}-${input.name}`)
        sendEditToFirebase(inputValue.value)
        setLoading(true)
        
    }

    const handleDiscard = (e) => {
        e.preventDefault()
        let inputValue = document.querySelector(`#${sectionName}-${input.name}`)
        inputValue.value = input.text
        setEditable(!editable)
    }
    
    useEffect(() => {
    if(isLoading){
        setTimeout(() => {
            setLoading(false)
            setModal(false)
        }, 2000);
    }}, [isLoading])
    

    return (
        <>
        {modal && (
            <Modal>
                <div>
                    <Validation>
                    <h3>Ändra från:</h3>
                    <p>{input.text}</p>
                    </Validation>
                    <Validation>
                    <h3>Ändra till:</h3>
                    <p>{newText}</p>
                    </Validation>
                </div>
                {isLoading ? (<LoadingSpinner/> ):(
                <ModalButtons>
                <button 
                className="save" onClick={(e) => confirmSave(e)}>Ja, spara ändring</button>
                <button 
                className="close" onClick={(e) => {e.preventDefault(); setModal(!modal)}}>Gå tillbaka</button>
                </ModalButtons>)}
            </Modal>
        )}
        
        <Container>
    
            <Label 
            htmlFor={`${sectionName}-${input.name}`}>{capitalize(input.name)}
            </Label>
            <div className="input-and-edit">
                <Input readOnly={!editable} 
                id={`${sectionName}-${input.name}`}
                className="input_text"
                type="text"
                defaultValue={input.text} />
                
                    {!editable ? (
                    <button 
                    onClick={(e) => handleEditClick(e)}>Redigera</button>
                ) : (
                    <>
                    <button className="discard"
                    onClick={(e) => handleDiscard(e)}>Ångra</button>
                    <button className="spara"
                    onClick={(e) => handleSave(e)}>Spara</button>
                    </>
                )}
            </div>
           
        </Container>
        </>
    )
}

export default InputContainer