//CSS
import styled from "styled-components"
import { flex, fonts, colors, device } from '../../styles/partials'
//react hooks
import { useState, useEffect } from "react"
//firebase
import { getDatabase, ref, update } from "firebase/database"
//components
import LoadingSpinner from "../loader/LoadingSpinner"
import { capitalize } from "../helpers/Capitalize"
import Link from "next/link"

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
        ${fonts.button};
        padding:4px 8px;
        border-radius:9px;
        background-color: ${colors.bio};
        color: white;
        border:none;   
        a{ color: white;
            text-decoration: none;} 
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
    background-color: ${colors.white};
    border-color: ${colors.bio};
        &:focus{
            background-color:white;
        outline: none;
        border:2px solid ${colors.bio};
        box-shadow: 0 0 10px ${colors.border};
        }
`
const InputBody = styled.textarea`
width: 90%;
padding: 10px;
${fonts.footnote};
background-color: ${colors.white};
border-color: ${colors.bio};
    &:focus{
        background-color:white;
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
${flex("column","center", "center")}
gap:10px;
z-index:4;
margin:1rem;
max-width:80%;
position:relative;
border-radius:19px;
padding-bottom:3rem;
&::after{
    content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 35px solid transparent;
	border-top-color: ${colors.primary};
	border-bottom: 0;
	margin-left: -35px;
	margin-bottom: -35px;
}
`
const Validation =styled.span`
width:80%;
h3{
    ${fonts.footnote};
    margin-top:1rem;
    color: ${colors.secondary};
}
p{
    ${fonts.footnote};
    
}
.warning{
    margin-top:1rem;
    color:${colors.bio};
}
`

const ModalButtons= styled.span`
${flex("column", "center", "center")}
@media screen and ${device.mobileL}{
    ${flex("row", "center", "center")}
}
gap:10px;
margin-top:1rem;

button{
    a{ color: white;
        text-decoration: none;}
    ${fonts.button};
    border-radius:9px;
    padding: 8px;
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
`

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`

const InputContainer = ({ input, inputIndex, sectionId, sectionName  }) => {
    console.log(sectionName, "name")
    //modal:
    const [modal, setModal] = useState(false)
    const [navButtons, setNavButtons] = useState(false)
    //loading in modal:
    const [isLoading, setLoading] = useState(false)
    //functionality:
    const targetId = sectionId-1
    const [editable, setEditable] = useState(false)
    //text in modal:
    const [newText, setNewText] = useState(null)
    const [warning, setWarning] = useState(false)
    const [denied, setDenied] = useState(false)

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
        let brExp = "<br/>";
        if(inputValue.value.indexOf(brExp) !== -1){
            if(input.name !== "body1" || input.name !== "body2"){
                if(input.name !=="body3")
                setWarning(true)
            }
        }
        setNewText(inputValue.value)
        setEditable(!editable)
    }


    const confirmSave=(e) => {
        e.preventDefault()
        let inputValue = document.querySelector(`#${sectionName}-${input.name}`)
        sendEditToFirebase(inputValue.value)
        setLoading(true)
        setWarning(false)
        setDenied(false)
    }

    const handleDiscard = (e) => {
        e.preventDefault()
        setWarning(false)
        let inputValue = document.querySelector(`#${sectionName}-${input.name}`)
        inputValue.value = input.text
        setEditable(!editable)
        setDenied(false)
    }
    
  
    
    useEffect(() => {
    if(isLoading){
        setTimeout(() => {
            setLoading(false)
            setDenied(false)
            setNavButtons(true);
        }, 2000);
    }}, [isLoading])
    
    const URLNav = `/#${sectionName}`
    
    return (
            <>
        {modal && (
            <ModalBackdrop onClick={() => {setModal(!modal)}}>
            <Modal onClick={e => { 
                e.stopPropagation();
            }}>
                <div>
                    <Validation>
                    <h3>Ändra från:</h3>
                    <p>{input.text}</p>
                    </Validation>
                    <Validation>
                    <h3>Ändra till:</h3>
                    {denied ? (<p>Du har använt en otillåten symbol i din text. Gå tillbaka och ta bort den. Annars prova att ladda om sidan. </p>): (<p>{newText}</p>)}
                    
                    {warning ? (<p className="warning">Varning: Du har använt dig av &lt;br/&gt;. Kontrollera att detta är en body-text som du editerar, annars kommer det synas på hemsidan!</p>): (null)}
                    </Validation>
                </div>
                {isLoading ? (<LoadingSpinner/> ):(
                    <>  {navButtons ? (null): (<ModalButtons>
                        {denied ? (null): (<button 
                        className="save" onClick={(e) => confirmSave(e)}>Ja, spara ändring</button>)}
                        
                        <button 
                        className="close" onClick={(e) => {e.preventDefault(); setModal(!modal)}}>Gå tillbaka</button>
                        </ModalButtons>)} </>
                )}
                {navButtons ? (  <ModalButtons>
                <button>
                    <Link href={URLNav} 
                    target="_blank"
                    aria-label="Tillbaka till huvudsidan">
                    Hem</Link>
                </button>
                <button onClick={(e) => {e.preventDefault(); setModal(!modal); setNavButtons(false)}}>Stäng</button>
                </ModalButtons>):(null)
            }
            </Modal>
            </ModalBackdrop>
        )}
        
        <Container>
            <Label 
            htmlFor={`${sectionName}-${input.name}`}>
                {input.name ==="imgurl" ? (
                    <p>BILDTEXT</p>
                ):input.name ==="body1" ? ( <p>body #1</p>):input.name ==="body2" ? (<p>body #2</p>):input.name ==="body3" ?(
                    <p>body #3</p>
                ):input.name ==="rubrik2" ? (
                    <p>Rubrik #2</p>
                ):input.name ==="rubrik3" ? (   
                    <p>Rubrik #3</p>
                ):(<p>{input.name}</p>)}
                
            </Label>
            <div className="input-and-edit">
                {input.name === "body1" ?
                    <InputBody readOnly={!editable} 
                    id={`${sectionName}-${input.name}`}
                    className="input_textarea"
                    name={`${sectionName}-${input.name}`}
                    rows="4"
                    cols="10"
                    type="textarea"
                    defaultValue={input.text} />
                :input.name === "body2" ? 
                    <InputBody readOnly={!editable} 
                    id={`${sectionName}-${input.name}`}
                    className="input_textarea"
                    name={`${sectionName}-${input.name}`}
                    rows="4"
                    cols="10"
                    type="textarea"
                    defaultValue={input.text} />
                :input.name === "body3" ? 
                    <InputBody readOnly={!editable} 
                    id={`${sectionName}-${input.name}`}
                    className="input_textarea"
                    name={`${sectionName}-${input.name}`}
                    rows="4"
                    cols="10"
                    type="textarea"
                    defaultValue={input.text} />
                : <Input readOnly={!editable} 
                    id={`${sectionName}-${input.name}`}
                    className="input_text"
                    type="text"
                    defaultValue={input.text} />}
                    {!editable ? (
                    <button 
                    onClick={(e) => handleEditClick(e)}>Redigera</button>
                ) : (
                    <>
                    <button 
                    className="discard"
                    onClick={(e) => handleDiscard(e)}>
                        Ångra</button>
                    <button className="spara"
                    onClick={(e) => handleSave(e)}>
                        Spara</button>
                    </>
                )}
            </div>
        </Container>
        </>
    )
}

export default InputContainer