import { flex, device, fonts, colors } from "../../styles/partials";
import styled, {css} from "styled-components";

const Container= styled.div`
margin:0;
background-color: ${colors.primary}
border-radius:19px
z-index:20;
`
const Content=styled.span`
ul{
  list-type:none;
}
`
const SharingModal = () => {
  return ( 
  <Container>
    <div className="close">X</div>
    <Content>
    <p>Dela detta via</p>
    <ul></ul>
    </Content>
  </Container>
  );
}
 
export default SharingModal;