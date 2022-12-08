import Head from "next/head";
import Script from 'next/script'

const HeadContent = () => {
  return ( 
    <>
    <Head>
      <title>Sveriges utsläpp</title>
      <meta 
          name="description" 
          content="En hemsida om de dolda utsläppen." />
      <link 
          rel="icon" 
          href="/favicon.ico" />
      <link 
          rel="apple-touch-icon" 
          href="/apple-touch-icon.png"/>
      <meta 
          property="og:type" 
          content="website" />
      <meta 
          property="og:locale" 
          content="sv_SE" />
      <meta 
          property="og:title" 
          content="Sveriges utsläpp" />
      <meta
          property="og:description"
          content="Utsläppen från biobränslen har ökat lavinartat de senaste åren. I Sverige är de idag ungefär lika stora som de fossila."
      />
      <meta
          property="og:image"
          content="https://sverigesutslapp.se/metapicture.png"
      />
      <meta 
        name="twitter:card" 
        content="summary"></meta>
      <meta 
        name="twitter:image:alt" 
        content="Sveriges utsläpp"/>
      <meta 
        name="twitter:title" 
        content="Sveriges utsläpp"/>
      <meta 
        name="twitter:description" 
        content="Utsläppen från biobränslen har ökat lavinartat de senaste åren. I Sverige är de idag ungefär lika stora som de fossila."/>
      <meta 
        name="twitter:image" 
        content="https://sverigesutslapp.se/metapicture.png"/>
      <meta 
        name="og:site_name" 
        content="Sveriges Utsläpp"></meta>

    </Head>
    <Script 
      id='gtag'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NVWTHN6');
            `
      }}
    />
    </>
  );
}
export default HeadContent;