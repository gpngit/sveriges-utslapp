//CSS
import styled from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'
import { Container, TextContent } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/image'



const SectionTypeOne= ({ pageElements, sectionIDname }) => {
    
    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const source = sections.find(section => section.name === 'source')

    return (
        <Container id={sectionIDname}>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <p>{body2.text}</p>
                <Image src={imgurl.url}
                alt={imgurl.text}
                width={500}
                height={500}/>
            </TextContent>
            <SourceAndShare 
             whiteBG={"yes"}
             sourceLink={source.text} shareLink={'#'} />
         
        </Container>
    )
}

export default SectionTypeOne