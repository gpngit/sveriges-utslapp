import styled from 'styled-components'
import { flex, fonts, colors, device, size } from '../../../styles/partials'
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import { Content, ButtonWrapper, Wrapper } from './ContainerStyles'
import Image from 'next/image'
import placeholder from "../../../public/placeholder__2.jpg"
import FuelOrigin from '../../fuel-origin/FuelOrigin'
import { useState } from 'react'
import ChosenYear from './currentYearBlob'

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

const Grid = styled.div`
max-width: 1500px;
display: grid;
gap: 3rem;
@media ${device.tablet}{
    grid-template-columns: repeat(2, 1fr); }
`
const Row = styled.span`
${flex("row")}
gap:20px;`


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
        <Grid>
            <TextContent>
                <Row>
                <ChosenYear/>
                <span>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                </span>
                </Row>
               
                <FuelOrigin energiMyndighetenData={energiMyndighetenData} />

                </TextContent>
                 <div>
                 <p>{body1.text}</p>
           
        <SourceAndShare 
       whiteBG={"yes"}
       sourceLink={url.text} 
       shareLink={'#fakta-biobransle'} 
       sourceText={title.text}
       />
                 </div>
               
                </Grid>
     
        
      </Content>
      }
      </>
    );
}
 
export default FaktaTwo;