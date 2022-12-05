import { flex, device, fonts, colors } from "../../styles/partials";
import styled, {css} from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,

} from 'next-share';

const Content = styled.div`
  ${flex()}
  gap: 1rem;
  ${fonts.footnote};

  ul {
    ${flex("row")};
    gap:6px;
  }

  .field {
    ${flex()};
    gap: 1rem;

    input{  
      ${fonts.footnote};
      padding: .6rem;
    }

    button{
      border: 2px solid ${colors.secondary};
      border-radius: 10px;
      background-color:transparent;
      color:${colors.secondary};
      padding: 8px;
      &:hover{
        background-color: rgba(55, 0, 0, 0.2);
      }
      &:active{
        color:${colors.fossil};
        border: 2px solid ${colors.fossil};
      }
      &:focus{
        color:${colors.fossil};
        border: 2px solid ${colors.fossil};
      }
    }
  }
`

const SharingModal = ({ source, text }) => {

  const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}${asPath}`;

  const [buttontext, setButtonText] = useState("Kopiera")

  const copyURL = () => {
    const copyText = document.getElementById("inputShareLink");
    copyText.select();
    copyText.setSelectionRange(0,999999);
    navigator.clipboard.writeText(copyText.value);
    
    setButtonText(`Kopierat!`)
    setTimeout(() => {
      setButtonText("Kopiera")
    },4000)
    
  }


  const correctURL = `${URL}${source}`
  
  return ( 
    <Content>
    <p>Dela detta via:</p>
    <ul>
      <FacebookShareButton
        url={correctURL} 
        quote={text}
        hashtag={'#biodrivmedel'}>
        <FacebookIcon size={32} round></FacebookIcon>
      </FacebookShareButton>
      <RedditShareButton 
      url={correctURL} 
      quote={text}
      hashtag={'#biodrivmedel'}>
        <RedditIcon size={32} round></RedditIcon>
      </RedditShareButton>
    <TwitterShareButton
    url={correctURL} 
    quote={text}
    hashtag={'#biodrivmedel'}>
      <TwitterIcon size={32} round></TwitterIcon>
    </TwitterShareButton>
    <EmailShareButton
     url={correctURL} 
     quote={text}
     hashtag={'#biodrivmedel'}>
      <EmailIcon size={32} round></EmailIcon>
    </EmailShareButton>
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
      onClick={copyURL}>{buttontext}</button>
    </span>
    </Content>
 
  );
}
export default SharingModal;

// https://sharingbuttons.io/