import SectionDynamic from './SectionDynamic'
import styled from 'styled-components'
import { colors, device, } from "/styles/partials"

const Container = styled.section`
background-color:${colors.primary};`

const Wrapper = styled.div`

@media ${device.laptop}{
clip-path: polygon(0% 70%, 4% 50%, 8% 50%, 12% 26%, 16% 26%, 20% 14%, 24% 18%, 30% 20%, 32% 0%, 36% 20%, 40% 38%, 44% 6%, 46% 10%, 48% 5%, 52% 16%, 56% 10%, 60% 15%, 64% 34%, 68% 0%, 70% 25%, 74% 30%, 80% 32%, 84% 44%, 88% 10%, 92% 26%, 96% 18%, 100% 55%, 100% 100%, 0% 100%);

-webkit-clip-path:  polygon(0% 70%, 4% 50%, 8% 50%, 12% 26%, 16% 26%, 20% 14%, 24% 18%, 28% 11%, 32% 0%, 36% 11%, 40% 38%, 44% 6%, 46% 10%, 48% 5%, 52% 16%, 56% 10%, 60% 15%, 64% 34%, 68% 0%, 70% 25%, 74% 30%, 80% 32%, 84% 44%, 88% 10%, 92% 26%, 96% 18%, 100% 55%, 100% 100%, 0% 100%);
padding-top:10rem;
}

display:block;
overflow:visible;
position:relative;
z-index:1;
background-color:white;
padding-top:10em;`

const Content = styled.div`
background-color:white;`

const Sections = ({pageOneElem, sectionIDnameOne, pageTwoElem, sectionIDnameTwo, pageThreeElem, sectionIDnameThree}) => {

  return ( 
  <Container>
    <Wrapper>
    </Wrapper>
    <Content>
      <SectionDynamic pageElements={pageOneElem} sectionIDname={sectionIDnameOne}/>
      <SectionDynamic pageElements={pageTwoElem} sectionIDname={sectionIDnameTwo}/>
      <SectionDynamic pageElements={pageThreeElem} sectionIDname={sectionIDnameThree}/>
      </Content>
  </Container>
  );
}
export default Sections;