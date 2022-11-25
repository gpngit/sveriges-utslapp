import SectionDynamic from './SectionDynamic'
import styled from 'styled-components'
import { flex, colors, device, fonts } from "/styles/partials"

const Container = styled.section``
const Wrapper = styled.div``

const Sections = ({pageOneElem, sectionIDnameOne, pageTwoElem, sectionIDnameTwo, pageThreeElem, sectionIDnameThree}) => {

  return ( <>
  <Container>
    <Wrapper>
      <SectionDynamic pageElements={pageOneElem} sectionIDname={sectionIDnameOne}/>
      <SectionDynamic pageElements={pageTwoElem} sectionIDname={sectionIDnameTwo}/>
      <SectionDynamic pageElements={pageThreeElem} sectionIDname={sectionIDnameThree}/>
    </Wrapper>
  </Container>
  
  
  </> );
}
export default Sections;