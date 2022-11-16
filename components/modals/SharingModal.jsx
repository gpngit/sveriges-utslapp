import { flex, device, fonts, colors } from "../../styles/partials";
import styled, {css} from "styled-components";
import Link from "next/link";


const Content=styled.div`
ul{
  list-type:none;
  gap:10px;
}
`
const ShareButton=styled.div`
background-color:black;
width:100px;
height:20px;
`

const SharingModal = ({source}) => {
  const copyURL = () => {
    console.log()
  }

  const correctURL = `/${source}`
  return ( 
 
    <Content>
    <p>Dela detta via</p>
    <ul>
    <Link 
    href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" 
    target="_blank" 
    rel="noopener" 
    aria-label="Share on Facebook">
      <p>FACEBOOK</p>
      <ShareButton>
     Dela
      </ShareButton>
    </Link>
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