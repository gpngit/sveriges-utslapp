//CSS
import styled, {css} from 'styled-components'
import { flex, colors, fonts, device  } from '../../styles/partials'
import { useEffect, useState, useRef } from 'react'
import SharingModal from '../modals/SharingModal'

const Container = styled.div`
    ${flex('row')};
    gap: 20px;
`
const LinkButton = styled.a`
    ${flex('row', 'center', 'center')}
    background-color: ${colors.border};
    text-decoration: none;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
    width: 10%;
    min-width:80px;
    padding:1rem;
    height: 1.5rem;
    ${fonts.paragraph};

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
padding:1rem;
height: 1.5rem;
${fonts.paragraph};

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

const SourceAndShare = ({ whiteBG, sourceLink, shareLink, sourceText }) => {

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
            {showSecondary ? (
                <>
                <LinkButton  secondary
                target="_blank"
                href={sourceLink}>Källa
                </LinkButton>
                <Button secondary
                onClick={() => {modal.current.showModal()}}>Dela
                </Button>
                </>
            ): (<>
                <LinkButton
                target="_blank"
                href={sourceLink}>Källa
                </LinkButton>
                <Button 
                onClick={() => modal.current.showModal()}>Dela
                </Button>
                </>
            )}
            {/* {showModal ? ( */}
            <ModalWrapper ref={modal}>
                <CloseButton onClick={() => modal.current.close()}>Stäng</CloseButton>
                <SharingModal
                source={shareLink} 
                text={sourceText}/>
            </ModalWrapper>
            {/* ) : (null)} */}
           
        </Container>
    )
}

export default SourceAndShare