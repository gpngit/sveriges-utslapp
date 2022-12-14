//CSS
import styled, {css} from 'styled-components'
import { flex, colors, size, fonts, device  } from '../../styles/partials'
import { useEffect, useState, useRef } from 'react'
import SharingModal from '../modals/SharingModal'
import LinkModal from "../modals/LinkModal";

const Container = styled.div`
    ${flex('row')};
    gap: 20px;
`
const LinkButton = styled.button`
    ${flex('row', 'center', 'center')}
    background-color: ${colors.border};
    text-decoration: none;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    width: 10%;
    min-width:80px;
    padding:1.2rem;
    height: 1.5rem;
    ${fonts.button};
    &:hover{
        background-color: rgba(55, 0, 0, 0.3);
    }
    @media (max-width:${size.mobileL}){ 
        ${fonts.paragraph};
    }
    &:focus{
        background-color: rgba(0, 0, 0, 0.2);
    }

    ${props => 
        props.secondary && 
        css`
        background-color: rgba(55, 0, 0, 0.1);
        text-decoration: none;
        border-radius: 10px;
        width: 80px;
        height: 40px;
        &:hover{
            background-color: rgba(55, 0, 0, 0.3);
        }
        border: 3px solid ${colors.secondary};
        color:${colors.secondary};
        `}
        &:focus{
            background-color: rgba(0, 0, 0, 0.2);
        }
        
`
const Button = styled.button`
    ${flex('row', 'center', 'center')}
    background-color: ${colors.border};
    text-decoration: none;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    width: 10%;
    min-width:80px;
    padding:1.2rem;
    height: 1.5rem;
    ${fonts.button};
    @media (max-width:${size.mobileL}){ 
        ${fonts.paragraph};
    }
    &:focus{
        background-color: rgba(0, 0, 0, 0.2);
    }

    ${props => 
        props.secondary && 
        css`
        background-color: rgba(55, 0, 0, 0.1);
        text-decoration: none;
        border-radius: 10px;
        width: 80px;
        height: 40px;
        border: 3px solid ${colors.secondary};
        color:${colors.secondary};
        `}
        &:hover{
            background-color: rgba(55, 0, 0, 0.3);
        }
        &:focus{
            background-color: rgba(0, 0, 0, 0.2);
        }
`
const ModalWrapper = styled.dialog`
    background-color: ${colors.primary};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 2rem;
    
    &::before {
        ${flex()}
    }
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.2);
    }
`
const CloseButton = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding:4px;
    background-color: ${colors.primary};
    border:none;
    &:hover{
        color: ${colors.bio};
    }
    &:active{
        color: ${colors.bio};
    }
    &:focus{
        color: ${colors.secondary};
    }
`
const LinkModalWrapper = styled.div`
background-color: ${colors.primary};
    z-index:20;
    position:absolute;
    width:50%;
    left:50%;
    transform: translate(-50%, -50%);
    border: none;
    padding: 2rem;
    @media (max-width:${size.mobiletablet}){
    width:80%;
    }
    
    &::before {
        ${flex()}
    }
    &::backdrop {
        background-color: rgba(0, 0, 0, 0.15);
    }
`
const SourceAndShare = ({ whiteBG, sourceLink1, sourceLink2, sourceLink3, shareLink, sourceText }) => {

    const modal = useRef()
    const [showSecondary, setShowSecondary] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(whiteBG === "yes"){
            setShowSecondary(true)
        }
    },[whiteBG])

    return (
        <Container>
                <LinkButton  secondary
                onClick = {() => {setShowModal(true)}}
                aria-label="Visa k??llor"
                >K??lla
                </LinkButton>
                <Button secondary
                onClick={() => {modal.current.showModal()}}>
                    Dela
                </Button>
            <ModalWrapper 
            ref={modal}>
                <CloseButton onClick={() => modal.current.close()}
                aria-label="St??ng f??nster">
                    St??ng
                </CloseButton>
                <SharingModal
                source={shareLink} 
                text={sourceText}/>
            </ModalWrapper>

            {showModal ? (
            <LinkModalWrapper>
                <CloseButton onClick={() => {setShowModal(false)}}>
                    St??ng
                </CloseButton>
                <LinkModal 
                sourceLink1 = {sourceLink1}
                sourceLink2 = {sourceLink2}
                sourceLink3 = {sourceLink3}/>
            </LinkModalWrapper>
            ):(null)}
        </Container>
    )
}

export default SourceAndShare