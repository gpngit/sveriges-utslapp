//CSS
import styled from 'styled-components'
import { flex, colors, fonts } from '../../../styles/partials'
//components
import SourceAndShare from '../../../components/buttons/SourceAndShare'

const Container = styled.section`
    ${flex()};
    gap: 40px;
    background-color: ${colors.secondary};
    padding: 100px 60px;
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


const TextContent = styled.div`
    ${flex()};
    gap: 20px;
    max-width: 600px;

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

    return (
        <Container id='ingress'>
          
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <p>{body2.text}</p>
            </TextContent>
            <SourceAndShare sourceLink={'#'} shareLink={'#'} />
         
        </Container>
    )
}

export default Ingress