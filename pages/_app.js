//CSS
import '../styles/globals.css'
//context
import AppContext from '../context/AppContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  const [authenticated, setAuthenticated] = useState(false)

  return (
    <AppContext.Provider value={{ authenticated, setAuthenticated }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
