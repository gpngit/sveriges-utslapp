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
const ShareButton=styled.div`
`

const SharingModal = () => {
  const copyURL = () => {
    
  }
  const closeModal=() => {
  console.log("Stäng")
  }

  return ( 
  <Container>
    <Content>
    <p>Dela detta via</p>
    <ul>
    <Link 
    href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" 
    target="_blank" 
    rel="noopener" 
    aria-label="Share on Facebook">
      <ShareButton>
        <div aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24">
            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
          </svg>
        </div>Dela på Facebook
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
      value="example.com/share-link"/>
      <button 
      aria-label="Kopiera länken"
      onClick={copyURL}>Kopiera</button>
    </span>
    </Content>
  </Container>
  );
}
export default SharingModal;

// https://sharingbuttons.io/