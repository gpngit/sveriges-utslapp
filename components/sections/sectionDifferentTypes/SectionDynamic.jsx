import { useState } from 'react'
//CSS
import styled from 'styled-components'
import { Container, Content, Grid, TextContentGrid, ImageWrapper, Subheading,  ImageDescription } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/legacy/image'

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
                <ImageWrapper 
                imgbody
                key={sectionIDname}>
                <Image
                layout ="responsive"
                src={imgurl.url}
                alt={imgurl.text}
                width={700}
                height={700}/>
                </ImageWrapper>
                </TextContentGrid>

                <TextContentGrid 
                body>
                    <p>{body1.text}</p>
                    <br/>
                    <p>{body2.text}</p>
                    <br/>
                    <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={source.text} 
                shareLink={`#${sectionIDname}`}
                sourceText={title.text}/>
                </TextContentGrid>
            </Grid>
            </Content>
            </Container>): (
            <Container 
            id={sectionIDname}
            first>
                <Content>
            <Grid
            >
                <TextContentGrid first >
                <Subheading>{subheading.text}</Subheading>
                    <h2>{title.text}</h2>
                    <p>{body1.text}</p>
                    <br/>
                    <p>{body2.text}</p>
                    <br/>
                    <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={source.text} 
                shareLink={`#${sectionIDname}`}
                sourceText={title.text}/>
                </TextContentGrid>
            <ImageWrapper 
            utslappimg
            key={sectionIDname}>
            <Image
                layout ="responsive"
                src={imgurl.url}
                alt={imgurl.text}
                width={800}
                height={800}/>
            </ImageWrapper>
          
            </Grid>
               
                </Content>
                </Container>
                )}
        </>}
        </>
    )
}

export default SectionDynamic


