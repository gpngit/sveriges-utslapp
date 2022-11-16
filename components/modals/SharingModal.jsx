import { flex, device, fonts, colors } from "../../styles/partials";
import styled, {css} from "styled-components";
import Link from "next/link";

const Container= styled.div`
margin:0;
background-color: ${colors.primary}
border-radius:19px
z-index:20;
`
const Content=styled.div`
ul{
  list-type:none;
}
`
const SharingModal = () => {
  const copyURL = () => {
    
  }
  const closeModal=() => {
  console.log("Stäng")
  }

  return ( 
  <Container>
    <div className="close"
    onClick={closeModal}>X</div>
    <Content>
    <p>Dela detta via</p>
    <ul>
    <Link href="#">Facebook</Link>
    <Link href="#">Instagram</Link>
    <Link href="#">Twitter</Link>
    <Link href="#">Whatsapp</Link>
    </ul>
    <p>Eller kopiera länken:</p>
    <span className="field">
      <input 
      id="inputShareLink"
      type="text"
      readOnly 
      value="example.com/share-link"/>
      <button onClick={copyURL}>Kopiera</button>
    </span>
    </Content>
  </Container>
  );
}
 
export default SharingModal;