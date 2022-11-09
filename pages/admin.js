//CSS
import styled from 'styled-components'
//context
import { useContext } from 'react'
import AppContext from '../context/AppContext'
//components
import Login from '../components/admin/Login'
import Portal from '../components/admin/Portal'
import Footer from '../components/footer/Footer'


export default function Admin() {

    const context = useContext(AppContext)
    const {authenticated, setAuthenticated} = context

    return (
        <>
        {!authenticated && <Login setAuthenticated={setAuthenticated} />}
        {authenticated && <Portal setAuthenticated={setAuthenticated} />}
        <Footer />
        </>
    )
}