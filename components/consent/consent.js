//CSS
import styled, {css} from "styled-components";
import { flex, colors, fonts } from '../../styles/partials'
// react hooks
import { useState, useEffect } from 'react';
//next-cookies
import { setCookie, hasCookie, getCookie } from 'cookies-next';


const Container = styled.div`
    z-index: 40;
    height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: rgb(0,0,0,.8);
    bottom: 0;
    `
const InnerContainer = styled.div`
    position:absolute;
    bottom: 0;
    width: 100%;
    padding: 2em;
    background-color: white;
    color: black;
`
const TextContent = styled.div`
    ${fonts.paragraph};
    span {
        cursor: pointer;
        text-decoration: underline;
    }
    a {
      /* color: ${colors.secondary}; */
      color: black;
    }
`
const ButtonContainer = styled.div`
    ${flex('row', 'flex-start', 'center')};
    gap: 1em;
    width: 100%;
    padding: 2em 0;
`
const Button = styled.button`
    padding: .8em 1em;
    /* background-color: ${colors.secondary}; */
    background-color: green;
    color: white;
    border: none;
    ${fonts.paragraph};

    ${props => props.secondary && css`
        background-color: transparent;
        text-decoration: underline;
        /* color: ${colors.secondary}; */
        color: black;
    `};
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
    if (getCookie('localConsent')){
      consentGranted()
    }
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
    <Container>
      <InnerContainer>
        <TextContent>
          <p>Vi anv??nder cookies f??r att ge dig en b??ttre upplevelse av denna webbplats.</p>
          <br />
          {!readMore && <span onClick={() => setReadMore(!readMore)}>L??s mer</span>}
          {readMore && (
              <>
              <p>Cookies ??r sm?? filer som laddas ner p?? din dator (eller din mobiltelefon) fr??n webbsidor som du bes??ker. Cookies inneh??ller information som l??ter webbsidor komma ih??g om du har anv??nt webbsidan f??rut.
              Vi anv??nder cookies f??r att skapa den b??sta upplevelsen f??r dig n??r du bes??ker v??r sida. De till??ter oss att b??ttre f??rst?? hur bes??kare interagerar med v??r webbsida (genom att anv??nda Google Analytics) s?? att vi kan f??rb??ttra anv??ndarupplevelsen.</p>
              <br />
              <a 
              href="https://policies.google.com/technologies/cookies?hl=en-US">
                L??s mer</a>
              </>
          )}
        </TextContent>
        <ButtonContainer>
          <Button onClick={() => acceptCookie()}>
            Acceptera alla cookies
          </Button>
          <Button secondary onClick={(e) => denyCookie()}>
            Avvisa alla
          </Button>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}

export default Consent;