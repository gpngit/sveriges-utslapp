//CSS
import styled from 'styled-components'
import { flex, size, colors, fonts, device } from '../../../styles/partials'
//components
import SourceAndShare from '../../../components/buttons/SourceAndShare'
import { useState, useEffect } from 'react'

const Container = styled.section`
    ${flex()};
    gap: 40px;
    background-color: ${colors.secondary};
    padding-bottom: 3rem;
    color: #f8f6f6;
    position: relative;
`
const Padding = styled.div`
padding:3rem;
max-width:1500px;

@media (max-width:${size.mobileL}){ 
    padding-left:3em;
    padding-bottom:-3rem;
}
@media ${device.mobileTablet}{
    padding-left:2rem;
}

margin-top:2rem;
@media (max-width: ${size.mobileS}){
    padding:1rem;

}
@media ${device.tablet}{
    padding-left:5rem;
}
@media ${device.laptop}{
    padding:3rem;
    padding-left:5rem;}
`
const TextContent = styled.div`
    ${flex()};
    gap: 20px;
  
    @media screen and ${device.tablet}{
    max-width:70%;}
    margin-bottom:2rem;
    h2 {
        ${fonts.lessheading};
    }
    p {
        ${fonts.paragraph}; 
    }
    .body{
        hyphens: manual;
        font-weight:500;
        text-align: left;
        text-justify: inter-word; 

        @media screen and ${device.tablet}{
            max-width:100%;
        }
    
        @media screen and ${device.laptop}{
         max-width:700px;
        }
        @media (max-width: ${size.mobileS}){
            display:inline;
            padding:0.2rem;
            text-align:left;
            flex-wrap: wrap;
        }
       
    }
    .subheading{
        @media ${device.tablet}{
            max-width:70%;
        }
        margin-bottom:-0.5rem;
    }
`

const Ingress = ({ pageElements }) => {

    const {id, sections, name} = pageElements
    const [show, setShow] = useState(pageElements.show)
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const url = sections.find(section => section.name === 'source')

    useEffect(() => {
        //radbryt:
        document.getElementById(`ingress-body1`).innerText = body1.text.replaceAll(/<br\s*[/]?>/gi, "\n");
        document.getElementById(`ingress-body2`).innerText = body2.text.replaceAll(/<br\s*[/]?>/gi, "\n");
        }, [])

    return (
       
        <>
        {show && <>
        <Container id='ingress'>
        <Padding>
                <TextContent>
                <p className='subheading'>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p id="ingress-body1" className='body'>{body1.text.replaceAll(/<br\s*[/]?>/gi, "")}</p>
                <p id="ingress-body2" className='body'>{body2.text.replaceAll(/<br\s*[/]?>/gi, "")}</p>
                </TextContent>
                <SourceAndShare 
                whiteBG={"no"}
                sourceLink={url.text} 
                shareLink={'#ingress'}
                sourceText={body1.text} />
        </Padding>
        </Container>
        </>}
        </>
    )
}

export default Ingress