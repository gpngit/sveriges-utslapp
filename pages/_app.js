//CSS
import '../styles/globals.css'
//context
import AppContext from '../context/AppContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [authenticated, setAuthenticated] = useState(false)
  const [displayYear, setDisplayYear] = useState(1990)

  return (
    <AppContext.Provider value={{ authenticated, setAuthenticated, displayYear, setDisplayYear }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
