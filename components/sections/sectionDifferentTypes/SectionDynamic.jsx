import { useState } from 'react'
//CSS
import styled from 'styled-components'
import { Container, Grid, TextContentGrid, TextContent, Row, ImageWrapper, Subheading, Item, ImageDescription } from './ContainerStyles'
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
            <Grid>
                <TextContentGrid>
                <Subheading>{subheading.text}</Subheading>
                <h2>{title.text}</h2>
                </TextContentGrid>
                <Empty/>

                {sectionIDname === "kolcykeln" ? ( <ImageWrapper key={sectionIDname}>

                {/* <Image
                layout ="responsive"
                src={Kalhygge}
                alt={imgurl.text}
                width={700}
                height={900}/> */}
              
                </ImageWrapper>): (<Empty/>)

                }
              
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


