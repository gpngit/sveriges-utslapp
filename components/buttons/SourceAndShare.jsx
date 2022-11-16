//CSS
import styled, {css} from 'styled-components'
import { flex, colors, fonts  } from '../../styles/partials'
import { useEffect, useState } from 'react'

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

const SourceAndShare = ({ whiteBG, sourceLink, shareLink }) => {
    const [showSecondary, setShowSecondary] = useState(false);
    console.log(shareLink, "shareLink")
    
    useEffect(() => {
        if(whiteBG === "yes"){
            setShowSecondary(true)
        }
    },[whiteBG])

    return (
        <Container>
            {showSecondary ? (<>
                <LinkButton  secondary
                    href={sourceLink}>Källa</LinkButton>
                <LinkButton secondary 
                    href={shareLink}>Dela</LinkButton></>
            ): ( <>
                <LinkButton
                    href={sourceLink}>Källa</LinkButton>
                <LinkButton 
                    href={shareLink}>Dela</LinkButton></>
            )}
           
        </Container>
    )
}

export default SourceAndShare