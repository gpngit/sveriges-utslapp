import { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
//CSS
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Container,Text, Sources, Subheading, TextContent, ImageWrapper, Row, Item } from './ContainerStyles'
import Link from 'next/link'


const Links = styled.p`
${fonts.paragraph}`

const Section = ( {pageElements, sectionIDname} ) => {

  const [imageSizeLandscape, setSmageSizeSquareLandscape] = useState({
    width: 400,
    height: 300
  });

  const [imageSizePortrait, setSmagePortrait] = useState({
    width: 300,
    height: 500
  });

  const [imageSizeSquare, setSmageSizeSquare] = useState({
    width: 400,
    height: 400
  });

  const {id, sections, name} = pageElements
  
  let amountOfPictures = sections.images.map(item => item).length;
  let amountOfTexts = sections.texts.map(item => item).length;
  let sourceForButton = sections.sources.map(item => item);
  // console.log("pics:", amountOfPictures, "texts:", amountOfTexts, sectionIDname)
  

  return ( 
  <Container sections
  id={sectionIDname}>
  <TextContent>
    <Subheading>{sections.subheading.text}</Subheading>
    <h2>{sections.title.text}</h2>

    {sectionIDname === "regler" && <>
    </>}

    {sectionIDname === "kolcykeln" && <>
    </>}



    { /*--------THIRD SECTION----------------------*/ }

    {sectionIDname === "siffror" && <>
    <Item>
    {sections.texts.map((item, index) => {
        if(index === 0){
          return <p key={item.id}>{item.text}</p>
        }})}
      {sections.images.map((item, index) => {
        if(index ===0){
          return (
            <ImageWrapper
            key={item.id}>
            <Image 
            className='image'
            layout = "responsive"
            width={imageSizeLandscape.width}
            height={imageSizeLandscape.height}
            src={item.url} 
            alt={item.text}
            />
            </ImageWrapper>
          )
        }
      })}
      {sections.texts.map((item, index) => {
        if(index === 1){
          return <p key={item.id}>{item.text}</p>
      }})}
    </Item>
    </>}

    { /*--------FOURTH SECTION----------------------*/ }
    
    {sectionIDname === "circular" && <>
    <Item>
      
    {sections.texts.map((item, index) => {
 
        if(index <= 1){
          return <p key={item.id}>{item.text}</p>
        }})}
      <Row>
      {sections.images.map((item, index) => {
        if(item.imgtype ==="portrait"){
          return (
            <ImageWrapper
            key={index}>
            <Image 
            className='image'
            layout = "responsive"
            width={imageSizePortrait.width}
            height={imageSizePortrait.height}
            src={item.url} 
            alt={item.text}
            />
            </ImageWrapper>
          )
        }
        if(item.imgtype === "square"){
          return (
            <ImageWrapper
            key={index}>
            <Image 
            className='image'
            layout = "responsive"
            width={imageSizeSquare.width}
            height={imageSizeSquare.height}
            src={item.url} 
            alt={item.text}
            />
            </ImageWrapper>
          )
        }
        else{
          return (
            <ImageWrapper
            key={item.id}>
            <Image 
            className='image'
            layout = "responsive"
            width={imageSizeLandscape.width}
            height={imageSizeLandscape.height}
            src={item.url} 
            alt={item.text}
            />
            </ImageWrapper>
          )
        }
         
        }
      )}
      </Row>
      {sections.texts.map((item, index) => {
        if(index >= 2){
          return <p key={item.id}>{item.text}</p>
        }})}
      </Item>
      </>}
  </TextContent>

  {sourceForButton.length > 1 && 
    <Sources>
    <h3>Flera källor:</h3>
  {sections.sources.map((item, index) => { 
    return <Links key={index}>Källa #{item.id}: <Link href={item.text}>{item.text}</Link></Links>
  })}
  </Sources>}

  <SourceAndShare 
  whiteBG={"yes"}
  sourceLink={sourceForButton[0].text} 
  shareLink={`#${sectionIDname}`}
  sourceText={sections.title.text} />
  </Container>
  
  
  );
}
 
export default Section;