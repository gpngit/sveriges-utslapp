import { useState } from 'react'
//CSS
import styled from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'
import { Container, TextContent, Row, ImageWrapper, Item } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/legacy/image'

const ImageLandscape = styled(Image)`
`

const SectionTypeOne= ({ pageElements, sectionIDname }) => {
    
    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const source = sections.find(section => section.name === 'source')

    return (
        <Container 
        firstContainer
        id={sectionIDname}>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
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
            shareLink={'#'} />
        </Container>
    )
}

export default SectionTypeOne