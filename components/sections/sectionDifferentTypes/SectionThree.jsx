import { useState } from 'react'
//CSS
import styled from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'
import { Container, TextContent, Row, ImageWrapper, Subheading, Item } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/legacy/image'

const ImageLandscape = styled(Image)`
`

const SectionThree= ({ pageElements, sectionIDname }) => {
    const [show, setShow] = useState(pageElements.show)
    const {id, sections, name} = pageElements
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const source = sections.find(section => section.name === 'source')

    return (
        <>{show && 
        <Container 
        firstContainer
        id={sectionIDname}>
            <TextContent>
                <Subheading>{subheading.text}</Subheading>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <ImageWrapper>
                <ImageLandscape
                layout ="responsive"
                src={imgurl.url}
                alt={imgurl.text}
                width={700}
                height={300}/>
                </ImageWrapper>
                <p>{body2.text}</p>
            </TextContent>
            <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={source.text} 
            shareLink={`#${sectionIDname}`}
            sourceText={title.text}/>
        </Container>
        }</>
    )
}

export default SectionThree