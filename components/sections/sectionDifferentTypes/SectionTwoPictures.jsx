
import { useState } from 'react'
import Image from 'next/legacy/image'
//CSS
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Container, TextContent, ImageWrapper, Row, Item } from './ContainerStyles'
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

    const [imageSizePortrait, setSmageSizePortrait] = useState({
        width: 200,
        height: 500
    });

    const [imageSizeLand, setSmageSizeLand] = useState({
        width: 600,
        height: 300
    });

    return (
        <Container id={sectionIDname}>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <Row>
                <Item>
                <p>{body1.text}</p>
                <ImageWrapper>
                <Image 
                className='image'
                layout = "responsive"
                width={500}
                height={imageSizeSquare.height}
                src={placeholder} 
                alt={imgurl.text}
                />
                </ImageWrapper>
                </Item>
                <Item>
                
                <ImageWrapper 
                portrait
                >
                <Image 
                className='image'
                layout = "responsive"
                width={imageSizePortrait.width}
                height={imageSizePortrait.height}
                src={imgurl2.url} 
                alt={imgurl2.text}
                />
                </ImageWrapper>
                <p>{imgurl2.text}</p>
                </Item>
                </Row>
                <p>{body2.text}</p>
            
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