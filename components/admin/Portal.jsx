//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
//react hooks
import { useEffect, useState } from 'react'
//firebase
import initFirebase from '../../firebase/initFirebase'
import { getDatabase, ref, onValue } from "firebase/database"
//components
import InputForm from './InputForm'

const Container = styled.main`
    ${flex()};
    gap: 20px;
    min-height: 100vh;
    padding: 30px;
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

    console.log(sections)

    return (
        <Container>
            <h2>Adminportal</h2>
            <button onClick={() => setAuthenticated(false)}>Logga ut</button>
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