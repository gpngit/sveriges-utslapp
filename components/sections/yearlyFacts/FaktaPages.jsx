import styled from 'styled-components'
import { flex, colors, device, fonts } from "/styles/partials"
//components
import FaktaOne from './faktaOne'
import FaktaTwo from './faktaTwo'
import YearChanger from '../../year-changer/YearChanger'

const Container = styled.section`
/* padding-top:2em; */
width:100%;
background-color:${colors.primary};
`
const Wrapper= styled.div`
width:100%;

padding-bottom:5rem;
@media ${device.laptop}{
  padding:10em;
} 
`

const FaktaPages = ({pageOneElem, pageTwoElem, emissions, energiMyndighetenData}) => {

  if(!pageOneElem.show && !pageTwoElem.show){
  return (null)
  }
  else{
  return ( 
    <Container>
      <Wrapper>
      <YearChanger emissions={emissions} />
      <FaktaOne pageElements={pageOneElem} emissions={emissions}/>
      <FaktaTwo pageElements={pageTwoElem} emissions={emissions} energiMyndighetenData={energiMyndighetenData}/>
      </Wrapper>
    </Container>
   );
  }
}
 
export default FaktaPages;