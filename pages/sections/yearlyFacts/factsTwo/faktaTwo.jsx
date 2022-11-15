import styled from 'styled-components'
import { flex, colors, fonts } from "../../../../styles/partials"
//components
import SourceAndShare from '../../../../components/buttons/SourceAndShare'
import BarChart from '../../../../components/barchart/BarChart'

const Container = styled.section`


  
`
const Content = styled.div`
${flex()};
width:70%
gap: 40px;
background-color:white;
color: black;
position: relative;
padding:2rem;
`

const TextContent = styled.div`
    ${flex()};
    gap: 20px;
    h2 {
        ${fonts.heading};;
    }
    p {
        ${fonts.paragraph};
    }
`


const FaktaTwo = ({pageElements, emissions}) => {

  const {id, sections, name} = pageElements

  const title = sections.find(section => section.name === 'title')
  const subheading = sections.find(section => section.name === 'subheading')
  const body1 = sections.find(section => section.name === 'body1')
  const url = sections.find(section => section.name === 'source')

  return (
    <Container id="faktaone">
      <Content>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                <p>{body1.text}</p>
                <BarChart emissions={emissions}/>
                <p>{url.text}</p>
            </TextContent>
            <SourceAndShare sourceLink={'#'} shareLink={'#'} />
      </Content>
    </Container>
    );
}
 
export default FaktaTwo;