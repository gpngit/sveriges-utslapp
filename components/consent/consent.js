//CSS
import styled, {css} from "styled-components";
import { flex, colors, size, fonts, device } from '../../styles/partials'
// react hooks
import { useState, useEffect } from 'react';
//next-cookies
import { setCookie, hasCookie } from 'cookies-next';


const Container = styled.div`
    ${flex('column', 'flex-start', 'center')}
    z-index: 10;
    position: fixed;
    background-color: rgb(0,0,0,.9);
    color: white;
    bottom: 0;
    width: 100%;
    padding: 2em;
`
const TextContent = styled.div`
    font-size: 14px;

    span {
        cursor: pointer;
        text-decoration: underline;
    }
`
const ButtonContainer = styled.div`
    ${flex('row', 'flex-start', 'center')};
    gap: 1em;
    width: 100%;
    padding: 2em 0;
`
const Button = styled.button`
    padding: .5em 1em;

    ${props => props.secondary && css`
        background-color: transparent;
        text-decoration: underline;
        color: white;
    `}
`

function consentGranted() {
    gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted'
  });
}

const Consent = () => {

  const [consent, setConsent] = useState(true);
  const [readMore, setReadMore] = useState(false)

  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    consentGranted()
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };

  if (consent === true) {
    return null;
  }

  return (
    <Container className={consent ? 'hidden' : ''}>
      <TextContent>
        <p>Vi använder cookies för att ge dig en bättre upplevelse av denna webbplats. Genom att fortsätta använda webbplatsen accepterar du cookies.</p>
        {!readMore && <span onClick={() => setReadMore(!readMore)}>Läs mer</span>}
        {readMore && (
            <>
            <br />
            <p>Cookies är små filer som laddas ner på din dator (eller din mobiltelefon) från webbsidor som du besöker. Cookies innehåller information som låter webbsidor komma ihåg om du har använt webbsidan förut.
            Vi använder cookies för att skapa den bästa upplevelsen för dig när du besöker vår sida. De tillåter oss att bättre förstå hur besökare interagerar med vår webbsida (genom att använda Google Analytics) så att vi kan förbättra användarupplevelsen.</p>
            <a href="https://policies.google.com/technologies/cookies?hl=en-US">Läs mer</a>
            </>
        )}
      </TextContent>
      <ButtonContainer>
        <Button onClick={() => acceptCookie()}>Acceptera alla cookies</Button>
        <Button secondary onClick={(e) => denyCookie()}>Avvisa alla</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Consent;