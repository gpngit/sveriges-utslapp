//CSS
import styled from 'styled-components'
import { flex, colors, fonts, device } from '../../../styles/partials'
//components
import SourceAndShare from '../../../components/buttons/SourceAndShare'

const Container = styled.section`
    ${flex()};
    gap: 40px;
    background-color: ${colors.secondary};
    padding-bottom: 3rem;
    color: white;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 35px solid transparent;
        border-top-color: ${colors.secondary};
        border-bottom: 0;
        margin-left: -35px;
        margin-bottom: -35px;
    }
`
const Padding = styled.div`
padding:3rem;

@media screen and ${device.tablet}{
padding:3rem;
padding-left:7rem;}
`


const TextContent = styled.div`
    ${flex()};
    gap: 20px;
    @media screen and ${device.laptop}{
    max-width:70%;}
    margin-bottom:2rem;
    h2 {
        ${fonts.heading};;
    }

    p {
        ${fonts.paragraph};
    }
`

const Ingress = ({ pageElements }) => {
    
    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const url = sections.find(section => section.name === 'source')
    return (
        <Container id='ingress'>
            <Padding>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <p>{body2.text}</p>
            </TextContent>
            <SourceAndShare 
            whiteBG={"no"}
            sourceLink={url.text} 
            shareLink={'#ingress'}
            sourceText={body1.text} />
            </Padding>
        </Container>
    )
}

export default Ingress