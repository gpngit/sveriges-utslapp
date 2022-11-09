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

    const [pages, setPages] = useState(null)
    const [heropage, setHeroPage] = useState(null)

    const getDataFromFirebase = (route) => {
        const db = getDatabase()
        const dbRef = ref(db, route)
        onValue(dbRef, (snapshot) => {
          setHeroPage(snapshot.val().heropage)
        })
    }

    useEffect(() => {
        initFirebase()
        getDataFromFirebase('admin/')
    }, [])

    return (
        <Container>
            <h2>Adminportal</h2>
            {heropage && heropage.map(page => {
                console.log(page)
                return (
                    <InputForm key={page.pageId} pageElements={page}>
                    </InputForm>
                )
            })}
        </Container>
    )
}

export default Portal