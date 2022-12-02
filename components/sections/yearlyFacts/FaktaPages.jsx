import styled from 'styled-components'
import { colors, flex, device} from "/styles/partials"
//components
import FaktaOne from './faktaOne'
import FaktaTwo from './faktaTwo'
import YearChanger from '../../year-changer/YearChanger'

const Container = styled.section`
width:100%;
background-color:${colors.primary};
`
const Wrapper = styled.div`
${flex("column","center", "center")}
width:100%;
@media ${device.tablet}{
  padding-top:2rem;
  padding-bottom:3rem;
}
@media ${device.laptopL}{
  padding-bottom:5rem;
}

`

const FaktaPages = ({pageOneElem, pageTwoElem, emissions, energiMyndighetenData}) => {
  if(!pageOneElem.show && !pageTwoElem.show){
  return (null)
  }
  else{
    return ( 
      <Container>
        <YearChanger 
        emissions={emissions} />
        <Wrapper>
        <FaktaOne 
        pageElements={pageOneElem} 
        emissions={emissions}/>
        <FaktaTwo 
        pageElements={pageTwoElem} 
        emissions={emissions} 
        energiMyndighetenData={energiMyndighetenData}/>
        </Wrapper>
      </Container>
    );
  }
}

export default FaktaPages;