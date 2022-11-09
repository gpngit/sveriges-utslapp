//CSS
import styled from 'styled-components'
//react hooks
import { useEffect, useState } from 'react'
//firebase
import initFirebase from '../../firebase/initFirebase'
import { getDatabase, ref, set, child, push, update, onValue } from "firebase/database"

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
          setPages(snapshot.val().pages)
          setHeroPage(snapshot.val().heropage)
        })
    }

    useEffect(() => {
        initFirebase()
        getDataFromFirebase('admin/')
    }, [])

    console.log(pages)
    console.log(heropage)

    return (
        <Container>
            <h2>Adminportal</h2>
            {heropage && heropage.map(page => {
                console.log(page)
                return (
                    <form key={page.pageId}>
                    </form>
                )
            })}
        </Container>
    )
}

export default Portal