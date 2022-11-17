import styled from 'styled-components'
import { flex, fonts, colors, device } from '../../../styles/partials'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import BarChart from '../../barchart/BarChart'
import { Content, Wrapper } from './ContainerStyles'
import Image from 'next/image'
import placeholder from "../../../public/placeholder__2.jpg"

const TextContent = styled.div`
    ${flex()};
    h2 {
        ${fonts.heading};;
    }
    p {
        ${fonts.paragraph};
    }
    img{
        margin-top:1rem;
    }
    margin-bottom:2rem;
`
const FaktaTwo = ({pageElements, emissions}) => {

  const {id, sections, name} = pageElements

  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')
  const url = sections.find(section => section.name === 'source')

  return (

      <Content id="faktaruta2">
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
            <Image src={placeholder}
            width={800}
            height={500}
            alt={"Biodrivmedel"}/>
         
            </TextContent>
            <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={url.text} 
            shareLink={'#faktaruta2'} 
            sourceText={title.text}
            />
      </Content>

    );
}
 
export default FaktaTwo;