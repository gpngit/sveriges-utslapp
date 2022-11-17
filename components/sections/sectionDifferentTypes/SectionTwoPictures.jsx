
import { useState } from 'react'
import Image from 'next/legacy/image'
//CSS
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Container, TextContent, ImageWrapper, Row, Item, ImageDescription, Subheading } from './ContainerStyles'
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
        width: 500,
        height: 300
       });
    const [imageSizeLand, setSmageSizeLand] = useState({
        width: 600,
        height: 300
    });

    return (
        <Container secondContainer
        id={sectionIDname}>
            <TextContent>
                <Subheading>{subheading.text}</Subheading>
                <h2>{title.text}</h2>
                <Item>
                <p>{body1.text}</p>
                <ImageWrapper>
                <Image 
                className='image'
                layout = "responsive"
                width={imageSizeSquare.height}
                height={200}
                src={placeholder} 
                alt={imgurl.text}
                />
                <ImageDescription>
                Bildtext
                </ImageDescription>
                </ImageWrapper>
                </Item>
           
                
                <p>{body2.text}</p>
                <ImageWrapper 
                >
                <Image 
                className='image'
                layout = "responsive"
                width={imageSizeSquare.height}
                height={imageSizeSquare.height +200}
                src={imgurl2.url} 
                alt={imgurl2.text}
                />
                </ImageWrapper>
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