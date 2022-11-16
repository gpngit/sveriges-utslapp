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

const SourceAndShare = ({ whiteBG, sourceLink, shareLink }) => {
    const [showSecondary, setShowSecondary] = useState(false);
    console.log(shareLink, "shareLink")
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
                source={shareLink}
                onClick={shareModal}>Dela</Button>
                {/* <LinkButton secondary 
                    href={shareLink}>Dela</LinkButton> */}
                    </>
            ): ( <>
                <LinkButton
                    href={sourceLink}>Källa</LinkButton>
                <Button 
                source={shareLink}
                onClick={shareModal}>Dela</Button>
                {/* <LinkButton 
                    href={shareLink}>Dela</LinkButton> */}
                    </>
               
            )}
            {showModal ? (<SharingModal
            source={shareLink} />) : (null)}
           
        </Container>
    )
}

export default SourceAndShare