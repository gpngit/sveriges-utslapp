import styled from 'styled-components'
import { flex, fonts, colors, device, size } from '../../../styles/partials'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Content, ButtonWrapper, Wrapper } from './ContainerStyles'
import Image from 'next/image'
import placeholder from "../../../public/placeholder__2.jpg"
import FuelOrigin from '../../fuel-origin/FuelOrigin'
import { useState } from 'react'

const TextContent = styled.div`
    ${flex()};
    h2 {
        ${fonts.heading};
        margin-bottom:1rem;
    }
    p {
        ${fonts.paragraph};
        @media (max-width: ${size.laptop}){
            padding-right:5rem;
        }
    }
    margin-bottom:2rem;
    
    max-width:1400px;
`

const FaktaTwo = ({pageElements, energiMyndighetenData}) => {
    const {id, sections, name} = pageElements
    const [show, setShow] = useState(pageElements.show)
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const url = sections.find(section => section.name === 'source')

    return (
    <>
    {show && 
      <Content id="fakta-biobransle">
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
            </TextContent>
                <FuelOrigin energiMyndighetenData={energiMyndighetenData} />
            <ButtonWrapper>
            <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={url.text} 
            shareLink={'#fakta-biobransle'} 
            sourceText={title.text}
            />
            </ButtonWrapper>
      </Content>
      }
      </>
    );
}
 
export default FaktaTwo;