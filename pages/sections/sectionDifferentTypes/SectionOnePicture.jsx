//CSS
import styled from 'styled-components'
import { flex, colors, fonts } from '../../../styles/partials'
//components
import SourceAndShare from '../../../components/buttons/SourceAndShare'

const Container = styled.section`
    ${flex()};
    gap: 40px;
    background-color: white;
    padding: 5rem;
    color: black;
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

const SectionTypeOne= ({ pageElements }) => {
    
    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const source = sections.find(section => section.name === 'source')

    return (
        <Container id='ingress'>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <p>{body2.text}</p>
                <p>alt:{imgurl.text} bild: {imgurl.url}</p>
                <p>{source.text}</p>
              
            </TextContent>
            <SourceAndShare sourceLink={'#'} shareLink={'#'} />
         
        </Container>
    )
}

export default SectionTypeOne