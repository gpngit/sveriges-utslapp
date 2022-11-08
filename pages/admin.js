//CSS
//context
import { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function Admin() {

    const context = useContext(AppContext)
    const {authenticated, setAuthenticated} = context

    return (
        <>Adminportal</>
    )
}