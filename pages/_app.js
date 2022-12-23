//CSS
import '../styles/globals.css'
//context
import AppContext from '../context/AppContext'
import { useEffect, useState } from 'react'
//components
import HeadContent from '../components/Head'
import Consent from '../components/consent/consent'

function MyApp({ Component, pageProps }) {

  const currentYear = new Date().getFullYear()
  const [authenticated, setAuthenticated] = useState(false)
  const [displayYear, setDisplayYear] = useState(currentYear-1)
  
  useEffect(() => {
    if(currentYear >= 2023){
      setDisplayYear(currentYear-2)
    }
  }, [displayYear, currentYear])

  return (
    <AppContext.Provider value={{ authenticated, setAuthenticated, displayYear, setDisplayYear }}>
      <HeadContent />
      <Component {...pageProps} />
      <Consent />
    </AppContext.Provider>
  )
}

export default MyApp
