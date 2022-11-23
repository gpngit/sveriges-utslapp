import styled from 'styled-components'
import { flex, fonts, colors, device } from '../../../styles/partials'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Content, Wrapper } from './ContainerStyles'
import Image from 'next/image'
import placeholder from "../../../public/placeholder__2.jpg"
import FuelOrigin from '../../fuel-origin/FuelOrigin'

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
        max-width:100%;
    }
    margin-bottom:2rem;
`
const FaktaTwo = ({pageElements, energiMyndighetenData}) => {
console.log(pageElements)
  const {id, sections, name} = pageElements

  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')
  const url = sections.find(section => section.name === 'source')

  return (
      <Content id="fakta-biobransle">
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
            {/* <Image src={placeholder}
            width={800}
            height={500}
            alt={"Biodrivmedel"}/> */}
            </TextContent>
                <FuelOrigin energiMyndighetenData={energiMyndighetenData} />
            <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={url.text} 
            shareLink={'#fakta-biobransle'} 
            sourceText={title.text}
            />
      </Content>

    );
}
 
export default FaktaTwo;