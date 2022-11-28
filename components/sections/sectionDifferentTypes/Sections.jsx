import SectionDynamic from './SectionDynamic'
import styled from 'styled-components'
import { colors, device, } from "/styles/partials"

const Container = styled.section`
background-color:${colors.primary};`

const Wrapper = styled.div`

@media ${device.laptop}{
clip-path: polygon(0% 100%, 4% 80%, 8% 80%, 12% 60%, 14% 36%, 16% 36%, 18% 0%, 20% 30%, 22% 18%, 26% 50%, 30% 20%, 32% 14%, 36% 10%, 40% 30%, 44% 10%, 46% 10%, 48% 7%, 52% 10%, 56% 14%, 58% 44%, 60% 0%, 62% 30%, 74% 38%, 76% 50%, 80% 30%, 82% 20%, 88% 30%, 90% 34%, 92% 40%, 96% 40%, 98% 55%, 100% 100%, 0% 100%);;

-webkit-clip-path:  polygon(0% 100%, 4% 80%, 8% 80%, 12% 60%, 14% 36%, 16% 36%, 18% 0%, 20% 30%, 22% 18%, 26% 50%, 30% 20%, 32% 14%, 36% 10%, 40% 30%, 44% 10%, 46% 10%, 48% 7%, 52% 10%, 56% 14%, 58% 44%, 60% 0%, 62% 30%, 74% 38%, 76% 50%, 80% 30%, 82% 20%, 88% 30%, 90% 34%, 92% 40%, 96% 40%, 98% 55%, 100% 100%, 0% 100%);;
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