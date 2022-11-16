//CSS
import styled from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'
import { Container, TextContent } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'


const SectionTypeTwo= ({ pageElements, sectionIDname }) => {
    
    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const imgurl2 = sections.find(section => section.name === 'imgurl2')
    const source = sections.find(section => section.name === 'source')

    return (
        <Container id={sectionIDname}>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <p>alt:{imgurl.text} bild: {imgurl.url}</p>
                <p>{body2.text}</p>
                <p>alt:{imgurl2.text} bild: {imgurl2.url}</p>
                <p>{source.text}</p>
              
            </TextContent>
            <SourceAndShare 
             whiteBG={"yes"}
             sourceLink={'#'} shareLink={'#'} />
         
        </Container>
    )
}

export default SectionTypeTwo