import { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
//CSS
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Container, TextContent, ImageWrapper, Row, Item } from './ContainerStyles'

const ImagePortrait = styled(Image)`
`

const Section = ( {pageElements, sectionIDname} ) => {
 

  const [imageSizeSquare, setSmageSizeSquare] = useState({
    width: 500,
    height: 500
  });

  const {id, sections, name} = pageElements
  
  let amountOfPictures = sections.images.map(item => item).length;
  let amountOfTexts = sections.texts.map(item => item).length;

  

  return ( 
  <Container id={sectionIDname}>
  <TextContent>
    <p>{sections.subheading.text}</p>
    <h2>{sections.title.text}</h2>
    {amountOfPictures < 2 && amountOfPictures > 0 && <>test</>}
    {amountOfPictures >= 2 && amountOfTexts > 2 && <>
    <Row>
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
            width={imageSizeSquare.width}
            height={imageSizeSquare.height}
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
    <Item> 
    {sections.texts.map((item, index) => {
        if(index === 2){
          return <p key={item.id}>{item.text}</p>
        }})}
      {sections.images.map((item, index) => {
        if(index ===1){
          return (
            <ImageWrapper
            key={item.id}>
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
      })}
      {sections.texts.map((item, index) => {
        if(index === 3){
          return <p key={item.id}>{item.text}</p>
        }})}
      </Item>
      </Row>
      </>}
  </TextContent>
  
  </Container>
  
  
  );
}
 
export default Section;