//context
import { useContext } from 'react'
import AppContext from '../context/AppContext'
//components
import Login from '../components/admin/Login'
import Portal from '../components/admin/Portal'

export default function Admin() {

    const context = useContext(AppContext)
    const {authenticated, setAuthenticated} = context

    return (
        <>
        {!authenticated && <Login setAuthenticated={setAuthenticated} />}
        {authenticated && <Portal setAuthenticated={setAuthenticated} />}
        </>
    )
}