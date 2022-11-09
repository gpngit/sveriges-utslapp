//CSS
import styled from 'styled-components'
//react hooks
import { useEffect, useState } from 'react'
//firebase
import initFirebase from '../../firebase/initFirebase'
import { getDatabase, ref, onValue } from "firebase/database"
//components
import InputForm from './InputForm'

const Container = styled.main`
    min-height: 100vh;
`

const Portal = () => {

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

    if (sections){
        console.log(Object.entries(sections))
    }

    return (
        <Container>
            <h2>Adminportal</h2>
            {/* {sections && sections.map(section => {
                return (
                    <InputForm key={section.id} pageElements={section}>
                    </InputForm>
                )
            })} */}
        </Container>
    )
}

export default Portal