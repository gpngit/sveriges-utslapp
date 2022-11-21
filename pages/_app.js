//CSS
import '../styles/globals.css'
//context
import AppContext from '../context/AppContext'
import { useState } from 'react'
//components
import HeadContent from '../components/Head'

function MyApp({ Component, pageProps }) {

  const [authenticated, setAuthenticated] = useState(false)
  const [displayYear, setDisplayYear] = useState(1990)

  return (
    <AppContext.Provider value={{ authenticated, setAuthenticated, displayYear, setDisplayYear }}>
      <HeadContent />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
