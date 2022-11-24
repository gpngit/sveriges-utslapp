import styled from 'styled-components'
import { flex, colors, fonts } from "/styles/partials"
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import BarChart from '../../barchart/BarChart'
import { Content } from './ContainerStyles'
import { useState } from 'react'



const TextContent = styled.div`
    gap: 20px;
    h2 {
        ${fonts.heading};;
    }
    p {
        ${fonts.paragraph};
    }
    padding:1rem;
    width:100%;
    max-width:1400px;
`


const FaktaOne = ({pageElements, emissions}) => {

    const [show, setShow] = useState(pageElements.show)
  const {id, sections, name} = pageElements
  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')
  const url = sections.find(section => section.name === 'source')
    
  return (
    <>{show && <>
      <Content 
      faktaOne
      id="faktaruta1">
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <BarChart emissions={emissions}/> 
            </TextContent>
            <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={url.text} 
            shareLink={'#faktaruta1'}
            sourceText={title.text} />
      </Content>
        </>}</>
    );
}
 
export default FaktaOne;