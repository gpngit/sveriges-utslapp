import styled from 'styled-components'
import { flex, colors, size, fonts, device } from "/styles/partials"
//components
import SourceAndShare from '../../buttons/SourceAndShare'
import BarChart from '../../barchart/BarChart'
import { Content, ButtonWrapper } from './ContainerStyles'
import { useState } from 'react'

const TextContent = styled.div`
    gap: 20px;
    
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
    padding:1rem;
    width:100%;
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

const FrameYear = styled.span`
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
position:relative;
width:60px;
height:60px;
background-color: ${colors.fossil};
`
const Year = styled.span`
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
top: 5px;
left: 5px;
right: 5px;
bottom: 5px;
position: absolute;
background-color: ${colors.primary};
${flex("center", "center")};
p{
    font-size:12px;
    position: absolute;
    top:30%;
}
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
        <Grid>
            <TextContent>
                <Row>
                <FrameYear>
                <Year>
                <p>ÅRTAL</p>
                </Year>
                </FrameYear>
                
                <span>
                <p>{subheading.text.toUpperCase()}</p>
                <h2>{title.text}</h2>
                </span>
                </Row>
                <BarChart emissions={emissions}/> 
                
                </TextContent>
                <div>
                <p>{body1.text}</p>
                <SourceAndShare 
            whiteBG={"yes"}
            sourceLink={url.text} 
            shareLink={'#faktaruta1'}
            sourceText={title.text} />
                </div>
                
            </Grid>
          
      </Content>
        </>}</>
    );
}
 
export default FaktaOne;