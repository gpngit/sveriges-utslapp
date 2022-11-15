import styled from 'styled-components'
import { flex, colors, fonts } from "/styles/partials"
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import BarChart from '../../barchart/BarChart'
import { Content } from './ContainerStyles'



const TextContent = styled.div`
    gap: 20px;
    h2 {
        ${fonts.heading};;
    }
    p {
        ${fonts.paragraph};
    }
`


const FaktaOne = ({pageElements, emissions}) => {
  const {id, sections, name} = pageElements
  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')
  const url = sections.find(section => section.name === 'source')

  return (
    
      <Content 
      faktaOne
      id="faktaone">
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <BarChart emissions={emissions}/>
                <p>{url.text}</p>
            </TextContent>
            <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={'#'} shareLink={'#'} />
      </Content>
 
    );
}
 
export default FaktaOne;