//CSS
import styled from "styled-components"
import { flex, fonts, colors, device } from '../../styles/partials'
//react hooks
import { useState, useEffect } from "react"
//firebase
import { getDatabase, ref, update } from "firebase/database"
//components
import LoadingSpinner from "../loader/LoadingSpinner"
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
        a{ color: white;
            text-decoration: none;}
        
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
    .row{
        ${flex("row", "center", "center")}
        min-width:50%;
    }
    .input_url1{
        border:none;
        margin-right:3px;
        ${fonts.footnote};
        text-transform: none;
        margin-right:-2px;
        color:grey;
        z-index:2;
        position:relative;
        left:50px;
        width:30px;
    }
    .input_url2{
    padding-left:72px;
    ${fonts.footnote}
    }
    .urlLabel{
        width:5px;
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
        ${fonts.footnote};
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

const InputContainerFooterLinks = ({ input, inputIndex, sectionId, sectionName }) => {
    const [modal, setModal] = useState(false)
    const [navButtons, setNavButtons] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const targetId = sectionId-1
    const [editable, setEditable] = useState(false)
    const [newText, setNewText] = useState(null)
    const [newURL, setNewURL] = useState(null)

    const handleEditClick = (e) => {
        e.preventDefault()
        setEditable(!editable)
    }

    const sendTextEditToFirebase = ( inputValueTxt, ) => {
        const db = getDatabase()
        const dbRef = ref(db, `/admin/${targetId}/sections/${inputIndex}`)
        update(dbRef, {text: inputValueTxt})
    }

    const sendURLEditToFirebase = (inputValueURL) => {
    const db = getDatabase()
    const dbRef = ref(db, `/admin/${targetId}/sections/${inputIndex}`)
    update(dbRef, {url: inputValueURL})
    }

    const handleSave = (e) => {
        e.preventDefault()
        let inputValueTxt = document.getElementById(`${sectionName}-${input.text}-${inputIndex}`)
        let inputValueURL = document.getElementById(`${sectionName}-${input.url}-${inputIndex}`)
        
        setNewText(inputValueTxt.value)
        setNewURL("https://"+inputValueURL.value)
        setModal(true)
        setEditable(!editable)
    }

    const confirmSave=(e) => {
        e.preventDefault()
        let inputValueTxt = document.getElementById(`${sectionName}-${input.text}-${inputIndex}`)
        let inputValueURL = document.getElementById(`${sectionName}-${input.url}-${inputIndex}`)
        sendTextEditToFirebase(inputValueTxt.value)
        sendURLEditToFirebase("https://"+inputValueURL.value)
        setLoading(true)
    }

    const handleDiscard = (e) => {
        e.preventDefault()
        let inputValueTxt = document.getElementById(`${sectionName}-${input.text}-${inputIndex}`)
        let inputValueURL = document.getElementById(`${sectionName}-${input.url}-${inputIndex}`)
        inputValueTxt.value = input.text
        inputValueURL.value = input.url
        setEditable(!editable)
    }
    
    useEffect(() => {
    if(isLoading){
        setTimeout(() => {
            setLoading(false)
            setNavButtons(true)
        }, 2000);
    }}, [isLoading])
    
    const URLNav = `https://sverigesutslapp.netlify.app/#ingress`

    return (
            <>
        {modal && (
            <ModalBackdrop onClick={() => {setModal(!modal)}}>
            <Modal 
            onClick={e => { 
                e.stopPropagation();
            }}>
                <div>
                    <Validation>
                    <h3>Ändra från:</h3>
                    <p>text: {input.text}</p>
                    <p>url: {input.url}</p>
                    </Validation>
                    <Validation>
                    <h3>Ändra till:</h3>
                    <p>text : {newText}</p>
                    <p>url: {newURL}</p>
                    </Validation>
                </div>
                {isLoading ? (<LoadingSpinner/> ):(
                    <>  {navButtons ? (null): (<ModalButtons>
                        <button 
                        className="save" onClick={(e) => confirmSave(e)}>Ja, spara ändring</button>
                        <button 
                        className="close" onClick={(e) => {e.preventDefault(); setModal(!modal)}}>Gå tillbaka</button>
                        </ModalButtons>)} </>
                )}
                {navButtons ? (  <ModalButtons>
                <button>
                <Link 
                href={URLNav} 
                target="_blank"
                aria-label="Tillbaka till huvudsidan">
                Hem</Link>
                </button>
                <button onClick={(e) => {e.preventDefault(); setModal(!modal); setNavButtons(false)}}>
                    Stäng
                </button>
                </ModalButtons>
                ):(null)
            }
            </Modal>
            </ModalBackdrop>
        )}
        
        <Container key={inputIndex}>
        {input.name !== "links" ? (null): 
        (
            <div className="input-and-edit">
            <Label 
            htmlFor={`${sectionName}-${input.text}-${inputIndex}`}>
            Text:</Label>
                
                <Input readOnly={!editable} 
                id={`${sectionName}-${input.text}-${inputIndex}`}
                className="input_text"
                type="text"
                defaultValue={input.text} />

                <Label className="urlLabel"
                htmlFor={`${sectionName}-${input.url}-${inputIndex}`}>
                    URL:
                </Label>
                <p 
                className="input_url1">
                    https://
                </p>

                <Input readOnly={!editable} 
                id={`${sectionName}-${input.url}-${inputIndex}`}
                className="input_url2"
                type="url"
                defaultValue={`${input.url}`.replace("https://", "")}/>

                {!editable ? (
                    <button 
                    onClick={(e) => handleEditClick(e)}>
                        Redigera
                    </button>
                ) : (
                    <>
                    <button className="discard"
                    onClick={(e) => handleDiscard(e)}>
                        Ångra
                        </button>
                    <button className="spara"
                    onClick={(e) => handleSave(e)}>
                        Spara
                        </button>
                    </>
                )}
            </div>
        )}
        </Container>
        </>
    )
}

export default InputContainerFooterLinks