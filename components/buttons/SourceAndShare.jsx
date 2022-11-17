//CSS
import styled, {css} from 'styled-components'
import { flex, colors, fonts  } from '../../styles/partials'
import { useEffect, useState } from 'react'
import SharingModal from '../modals/SharingModal'

const Container = styled.div`
    ${flex('row')};
    gap: 20px;
    
`
const LinkButton = styled.a`
    ${flex('row', 'center', 'center')}
    background-color: transparent;
    text-decoration: none;
    color: white;
    border: 3px solid white;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    ${fonts.footnote};

    ${props => 
        props.secondary && 
        css`
        background-color: transparent;
        text-decoration: none;
        border-radius: 10px;
        width: 100px;
        height: 40px;
        border: 3px solid ${colors.secondary};
        color:${colors.secondary};
        `}
`
const Button = styled.button`
${flex('row', 'center', 'center')}
background-color: transparent;
text-decoration: none;
color: white;
border: 3px solid white;
border-radius: 10px;
width: 100px;
height: 40px;
${fonts.footnote};

${props => 
    props.secondary && 
    css`
    background-color: transparent;
    text-decoration: none;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    border: 3px solid ${colors.secondary};
    color:${colors.secondary};
    `}
`
const Wrapper = styled.span`
background-color: ${colors.primary};
padding:1rem;
color:black;
border-radius:19px;
z-index:20;
position:absolute;
left:50%;
margin-top:-1rem;
filter: drop-shadow(0 0 0.75rem black);
`
const Close = styled.p`
font-weight:bold;
margin-bottom:2rem;
cursor:pointer;
font-size:18px;
`

const SourceAndShare = ({ whiteBG, sourceLink, shareLink, sourceText }) => {
    const [showSecondary, setShowSecondary] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        if(whiteBG === "yes"){
            setShowSecondary(true)
        }
    },[whiteBG])

    const shareModal= () => {
        setShowModal(true)
    }
  

    return (
        <Container>
            {showSecondary ? (<>
                <LinkButton  secondary
                    href={sourceLink}>Källa</LinkButton>
                <Button secondary
                onClick={shareModal}>Dela</Button>
       
                    </>
            ): ( <>
                <LinkButton
                    href={sourceLink}>Källa</LinkButton>
                <Button 
                onClick={shareModal}>Dela</Button>
              
                    </>
            )}
            {showModal ? (<Wrapper>
                <Close onClick={() => setShowModal(false)}>X</Close>
                <SharingModal
                source={shareLink} 
                text={sourceText}/>
                </Wrapper>) : (null)}
           
        </Container>
    )
}

export default SourceAndShare