import styled from 'styled-components'
import { flex, colors, device, fonts } from "/styles/partials"
//components
import FaktaOne from './faktaOne'
import FaktaTwo from './faktaTwo'
import YearChanger from '../../year-changer/YearChanger'

const Container = styled.section`
width:100%;
background-color:${colors.primary};
padding:5rem;
padding-top:10rem;
padding-left:7rem;
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