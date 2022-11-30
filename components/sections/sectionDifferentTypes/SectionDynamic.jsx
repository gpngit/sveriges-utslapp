import { useState } from 'react'
//CSS
import styled from 'styled-components'
import { Container, Grid, TextContentGrid, TextContent, Row, ImageWrapper, Subheading, Item, ImageDescription } from './ContainerStyles'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import Image from 'next/legacy/image'
// import Kalhygge from "../../../public/Kalhygge.svg"
// import utslapp from "../../../public/utslapp.svg"
// import koldioxid from "../../../public/koldioxid.svg"

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
            <Grid>
                <TextContentGrid>
                <Subheading>{subheading.text}</Subheading>
                <h2>{title.text}</h2>
                </TextContentGrid>
                <Empty/>
                <ImageWrapper>
                {sectionIDname === "kolcykeln" ? ( 
                {/* <Image
                layout ="responsive"
                src={Kalhygge}
                alt={imgurl.text}
                width={900}
                height={900}/> */}
                ): (
                 
               
                {/* <Image
                layout ="responsive"
                src={koldioxid}
                alt={imgurl.text}
                width={900}
                height={900}/> */}
                )
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
            </Container>): (
            <Container 
            id={sectionIDname}>
            <Grid>
                <TextContentGrid>
                <Subheading>{subheading.text}</Subheading>
                    <h2>{title.text}</h2>
                    <p>{body1.text}</p>
                    <p>{body2.text}</p>
                </TextContentGrid>
                <Empty/>
                {/* <ImageWrapper>
                <Image
                layout ="responsive"
                src={utslapp}
                alt={imgurl.text}
                width={900}
                height={900}/>
                </ImageWrapper> */}
            </Grid>
                <SourceAndShare 
                whiteBG={"yes"}
                sourceLink={source.text} 
                shareLink={`#${sectionIDname}`}
                sourceText={title.text}/>
                </Container>
                )}
        </>}
        </>
    )
}

export default SectionDynamic


