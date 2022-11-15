import styled from 'styled-components'
import { flex, colors, fonts } from "../../../../styles/partials"
//components
import SourceAndShare from '../../../../components/buttons/SourceAndShare'
import BarChart from '../../../../components/barchart/BarChart'

const Container = styled.section`
  
   padding:10rem;
   background-color:${colors.primary}
  
`
const Content = styled.div`
${flex()};
width:70%
gap: 40px;
background-color:white;
color: black;
position: relative;
padding:2rem;

&::after{
  content: '';
position: absolute;
top: 0;
left: 50%;
width: 0;
height: 0;
border: 35px solid transparent;
border-bottom-color: white;
border-top: 0;
margin-left: -20px;
margin-top: -30px;
}
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


const FaktaOne = ({pageElements, emissions}) => {

  
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
 
export default FaktaOne;