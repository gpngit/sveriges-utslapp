import { useState } from 'react'
//CSS
import styled from 'styled-components'
import { Container, Content, Grid, TextContentGrid, ImageWrapper, Subheading,  ImageDescription, Mobile, Desktop } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/legacy/image'
import SeveralSourcesAndShare from "../../buttons/SeveralSourcesAndShare";

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
        <Container id={sectionIDname}>
            <Content>
                <Grid>
                    <TextContentGrid>
                    <Subheading>
                        {subheading.text}
                        </Subheading>
                        <h2>{title.text}</h2>
                        <p>{body1.text}</p>
                        <br/>
                        <p>{body2.text}</p>
                    <Desktop>
                  {sectionIDname === "kolcykeln" ? (   <SeveralSourcesAndShare
                        whiteBG= {"yes"}
                        sourceLink1 ={sections.find(section =>section.name === "sources1").text}
                        sourceLink2 = 
                        {sections.find(section =>section.name === "sources2").text}
                        sourceLink3=
                        {sections.find(section =>section.name === "sources3").text}
                        shareLink={`#${sectionIDname}`}
                        sourceText={title.text}/>
                    ): ( <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={source.text} 
                shareLink={`#${sectionIDname}`}
                sourceText={title.text}/>)}
                </Desktop>
                    </TextContentGrid>
                    {sectionIDname === "statistik" ? (<>
            <ImageWrapper 
            first
            key={sectionIDname}>
            <Image
                layout ="responsive"
                src={imgurl.url}
                alt={imgurl.text}
                width={800}
                height={800}/>
            <ImageDescription>
                {imgurl.text}
            </ImageDescription>
            </ImageWrapper>
                    </>): (<>
                        <ImageWrapper 
            key={sectionIDname}>
            <Image
                layout ="responsive"
                src={imgurl.url}
                alt={imgurl.text}
                width={800}
                height={800}/>
            <ImageDescription>
                {imgurl.text}
            </ImageDescription>
            </ImageWrapper>
                    </>)}
           
            <Mobile>
                    {sectionIDname === "kolcykeln" ? (
                        <SeveralSourcesAndShare
                        whiteBG= {"yes"}
                        sourceLink1 ={sections.find(section =>section.name === "sources1").text}
                        sourceLink2 = 
                        {sections.find(section =>section.name === "sources2").text}
                        sourceLink3=
                        {sections.find(section =>section.name === "sources3").text}
                        shareLink={`#${sectionIDname}`}
                        sourceText={title.text}/>
                        ): (         
                <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={source.text} 
                shareLink={`#${sectionIDname}`}
                sourceText={title.text}/>)}
                </Mobile>
                </Grid>
            </Content>
        </Container>
        }
        </>
    )
}

export default SectionDynamic


