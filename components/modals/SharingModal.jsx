import { flex, device, fonts, colors } from "../../styles/partials";
import styled, {css} from "styled-components";
import { useState } from "react";
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

const Content=styled.div`
width:100%;
padding:0;
margin:0;

${fonts.paragraph};
ul{
  margin-top:1rem;
  ${flex("row")}
  list-type:none;
  gap:6px;
  padding-bottom:1rem;
}

.field{
  margin-top:4px;
  ${flex()}
  gap:10px;

  input{
    padding:8px 6px;
    border:none;
    ${fonts.footnote};
    max-width:100%;
  }

  button{
    background-color:transparent;
    border: solid;
    border-color: ${colors.secondary};
    border-radius:9px;
    padding:4px 6px;
    color:${colors.secondary};
    &:hover{
      border-color: ${colors.bio};
    }
    &:focus{
      border-color: ${colors.fossil};
    }
    &:active{
      border-color: ${colors.fossil};
    }
  }
}
`


const SharingModal = ({source, text}) => {
  const [buttontext, setButtonText] = useState("Kopiera")

  const copyURL = () => {
    console.log(document.getElementById("inputShareLink").value)
    setButtonText("Kopierat!")
    setTimeout(() => {
      setButtonText("Kopiera")
    },4000)
    
  }
  const correctURL = `https://sverigesutslapp.netlify.app/${source}`
  
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