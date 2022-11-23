import styled from 'styled-components'
import { flex, colors, device, fonts } from "/styles/partials"
//components
import FaktaOne from './faktaOne'
import FaktaTwo from './faktaTwo'

const Container = styled.section`
padding-top:5em;
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

const FaktaPages = ({pageOneElem, pageTwoElem, emissions}) => {
  return ( 
    <Container>
      <Wrapper>
      <FaktaOne pageElements={pageOneElem} emissions={emissions}/>
      <FaktaTwo pageElements={pageTwoElem} emissions={emissions}/>
      </Wrapper>
    </Container>
   );
}
 
export default FaktaPages;