import { useState } from 'react'
//CSS
import styled from 'styled-components'
import { Container, Content, Grid, TextContentGrid, TextContent, Row, ImageWrapper, Subheading, Item, ImageDescription } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/legacy/image'
import utslappImg from "./img/utslapp--3.png"
import kolcykelnImg from "./img/kolcykeln.png"
import kalhyggeImg from "./img/Kalhygge.png"

const Empty = styled.span`
width:100%;`

const SectionDynamic= ({ pageElements, sectionIDname }) => {
   
    const [show, setShow] = useState(pageElements.show)
    const {id, sections, name} = pageElements
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const source = sections.find(section => section.name === 'source')
    
    return (
        <>
        {show && 
            <>{sectionIDname !== "statistik" ? (
            <Container 
            id={sectionIDname}>
            <Content>
                <Grid>
                <TextContentGrid>
                <Subheading>{subheading.text}</Subheading>
                <h2>{title.text}</h2>
                </TextContentGrid>
                <Empty/>
                <ImageWrapper key={sectionIDname}>
                {sectionIDname === "kolcykeln" ? ( 
                <Image
                layout ="responsive"
                src={kalhyggeImg}
                alt={imgurl.text}
                width={700}
                height={700}/>
            ): (  <Image
                layout ="responsive"
                src={kolcykelnImg}
                alt={imgurl.text}
                width={700}
                height={700}/>)
                }
            </ImageWrapper>
                <TextContentGrid 
                body>
                    <p>{body1.text}</p>
                    <p>{body2.text}</p>
                </TextContentGrid>
                <Empty/>
                <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={source.text} 
                shareLink={`#${sectionIDname}`}
                sourceText={title.text}/>
            </Grid>
            </Content>
            </Container>): (
            <Container 
            id={sectionIDname}
            first>
                <Content>
            <Grid>
                <TextContentGrid>
                <Subheading>{subheading.text}</Subheading>
                    <h2>{title.text}</h2>
                    <p>{body1.text}</p>
                    <p>{body2.text}</p>
                </TextContentGrid>
                
            <ImageWrapper key={sectionIDname}>
            <Image
                layout ="responsive"
                src={utslappImg}
                alt={imgurl.text}
                width={700}
                height={700}/>
            </ImageWrapper>
            </Grid>
                <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={source.text} 
                shareLink={`#${sectionIDname}`}
                sourceText={title.text}/>
                </Content>
                </Container>
                )}
        </>}
        </>
    )
}

export default SectionDynamic


