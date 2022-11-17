
import { useState } from 'react'
import Image from 'next/legacy/image'
//CSS
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Container, TextContent, ImageWrapper, Row, Text, Item, ImageDescription, Subheading } from './ContainerStyles'
import placeholder from "../../../public/placeholder__1.jpg"

const ImagePortrait = styled(Image)`
`
const SectionTypeTwo= ({ pageElements, sectionIDname }) => {
    
    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const imgurl2 = sections.find(section => section.name === 'imgurl2')
    const source = sections.find(section => section.name === 'source')

    const [imageSizeSquare, setSmageSizeSquare] = useState({
        width: 700,
        height: 400
       });

    return (
        <Container secondContainer
        id={sectionIDname}>
            <TextContent>
                <Subheading>{subheading.text}</Subheading>
                <h2>{title.text}</h2>
                <Item>
                <Text>
                <p>{body1.text}</p>
                </Text>
                <Row>
                <ImageWrapper>
                <Image 
                className='image'
                layout = "responsive"
                width={1000}
                height={600}
                src={placeholder} 
                alt={imgurl.text}
                />
                <ImageDescription>
                {imgurl.text}
                </ImageDescription>
                </ImageWrapper>
                <ImageWrapper>
                <Image 
                className='image'
                layout = "responsive"
                width={300}
                height={200}
                src={imgurl2.url} 
                alt={imgurl2.text}
                />
                <ImageDescription>
                {imgurl.text}
                </ImageDescription>
                </ImageWrapper>
                </Row>
                </Item>
                <Text>
                {body2.text}
                </Text>
               
            </TextContent>
            
            <SourceAndShare 
             whiteBG={"yes"}
             sourceLink={source.text} 
             shareLink={`#${sectionIDname}`}
             sourceText={title.text} />
         
        </Container>
    )
}

export default SectionTypeTwo