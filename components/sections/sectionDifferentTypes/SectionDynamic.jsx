import { useEffect, useState } from 'react'
//CSS
import styled from 'styled-components'
import { Container, Content, Grid, TextContentGrid, ImageWrapper, Subheading,  ImageDescription, Mobile, Desktop } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/legacy/image'
import SeveralSourcesAndShare from "../../buttons/SeveralSourcesAndShare";

const Paragraph = styled.p`
`
const SectionDynamic= ({ pageElements, sectionIDname }) => {
    const [show, setShow] = useState(pageElements.show)
    const {id, sections, name} = pageElements
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const imgurl = sections.find(section => section.name === 'imgurl')
    const source = sections.find(section => section.name === 'source')

    useEffect(() => {
        if (show){
    //radbryt:
    let newBody1 = body1.text.replaceAll(/<br\s*[/]?>/gi, "\n");
    document.getElementById(`${sectionIDname}+body1`).innerText = newBody1
    let newBody2 = body2.text.replaceAll(/<br\s*[/]?>/gi, "\n");
    document.getElementById(`${sectionIDname}+body2`).innerText = newBody2
        } 
    }, [])

    console.log(imgurl, "imgurl")
    console.log(sectionIDname)
    return (
    <>
    {show && 
        <Container 
        id={sectionIDname}>
            <Content>
            <Grid>
                <TextContentGrid>
                    <Subheading>
                        {subheading.text}
                    </Subheading>
                    <h2>{title.text}</h2>
                    <Paragraph 
                    id={`${sectionIDname}+body1`}>
                        {body1.text.replaceAll(/<br\s*[/]?>/gi, "")}
                    </Paragraph>
                    <br/>
                    <Paragraph 
                    id={`${sectionIDname}+body2`}>
                        {body2.text.replaceAll(/<br\s*[/]?>/gi, "")}
                    </Paragraph>
                    <Desktop>
                        {sectionIDname === "biobränsle" ? (   
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
                    </Desktop>
                </TextContentGrid>
                {sectionIDname === "statistik" ? ( 
                <ImageWrapper 
                first
                key={sectionIDname}>
                
                <Image
                    layout ="responsive"
                    src={imgurl.url}
                    alt={imgurl.alttext}
                    width={800}
                    height={800}/>
                <ImageDescription>
                    {imgurl.text}
                </ImageDescription>
                </ImageWrapper>
                ): ( 
                <ImageWrapper 
                    key={sectionIDname}>
                    <Image
                    layout ="responsive"
                    src={imgurl.url}
                    alt={imgurl.alttext}
                    width={800}
                    height={800}/>
                    <ImageDescription>
                    {imgurl.text}
                    </ImageDescription>
                    </ImageWrapper>)} 
                
                <Mobile>
                    {sectionIDname === "biobränsle" ? (
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


