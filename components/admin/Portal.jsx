//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes, device } from '../../styles/partials'
//react hooks
import { useEffect, useState } from 'react'
//firebase
import initFirebase from '../../firebase/initFirebase'
import { getDatabase, ref, onValue } from "firebase/database"
//components
import InputForm from './InputForm'

const Container = styled.main`
    background-color:${colors.primary};
    ${flex()};
    gap: 2rem;
    min-height: 100vh;
    padding: 2rem;

    .header-and-logout {
        ${flex('row', 'space-between', 'center')}
        width: 100%;
    }
`

const Portal = ({ setAuthenticated }) => {

    const [sections, setSections] = useState(null)

    const getDataFromFirebase = (route) => {
        const db = getDatabase()
        const dbRef = ref(db, route)
        onValue(dbRef, (snapshot) => {
        setSections(snapshot.val())
        })
    }

    useEffect(() => {
        initFirebase()
        getDataFromFirebase('admin/')
    }, [])

    return (
        <Container>
            <div className='header-and-logout'>
                <h2>Adminportal</h2>
                <button onClick={() => setAuthenticated(false)}>Logga ut</button>
            </div>
            {sections && sections.map(section => {
                return (
                    <InputForm key={section.id} pageElements={section}>
                    </InputForm>
                )
            })}
        </Container>
    )
}

export default Portal