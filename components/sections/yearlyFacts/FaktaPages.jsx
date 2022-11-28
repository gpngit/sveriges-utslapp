import styled from 'styled-components'
import { colors} from "/styles/partials"
//components
import FaktaOne from './faktaOne'
import FaktaTwo from './faktaTwo'
import YearChanger from '../../year-changer/YearChanger'

const Container = styled.section`
width:100%;
background-color:${colors.primary};
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
        <FaktaOne 
        pageElements={pageOneElem} 
        emissions={emissions}/>
        <FaktaTwo 
        pageElements={pageTwoElem} 
        emissions={emissions} 
        energiMyndighetenData={energiMyndighetenData}/>
      </Container>
    );
  }
}

export default FaktaPages;