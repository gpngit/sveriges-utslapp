import { flex, device, fonts, colors } from "../../styles/partials";
import styled, {css} from "styled-components";
import Link from "next/link";


const Content=styled.div`
width:90%;

ul{
  list-type:none;
  gap:10px;
  padding-bottom:1rem;
}

.field{
  margin-top:4px;
  ${flex()}
  gap:6px;
  input{
    padding:8px 6px;
    border:none;
  }

  button{
    background-color:transparent;
    border: solid;
    border-color: ${colors.secondary};
    border-radius:9px;
    padding:8px 6px;
    font-weight:bold;
    color:${colors.secondary};
   
  }
}
`


const SharingModal = ({source}) => {
  const copyURL = () => {
   
  }
  const correctURL = `/${source}`
  
  return ( 
 
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
      aria-label="read only input"
      readOnly 
      value={correctURL}/>
      <button 
      aria-label="Kopiera länken"
      onClick={copyURL}>Kopiera</button>
    </span>
    </Content>
 
  );
}
export default SharingModal;

// https://sharingbuttons.io/