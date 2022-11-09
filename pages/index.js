//Nextjs components
import Head from 'next/head'
//Firebase
import initFirebase from '../firebase/initFirebase'
import { getDatabase, ref, child, get } from "firebase/database"
//SCB
import { getDataFromScbAndTransferToFirebase } from '../scb/fetch'
//components
import Hero from '../components/hero/Hero'
import Footer from '../components/footer/Footer'


export async function getServerSideProps(){
  initFirebase()
  const db = getDatabase()
  const dbRef = ref(db)

  let adminData = await get(child(dbRef, 'admin/'))
  let scbData = await get(child(dbRef, 'scb/'))

  let rightNow = new Date()
  let timeSinceUpdate = new Date(scbData.val().date) 
  let daysBetween =  ((((((rightNow.getTime()) - (timeSinceUpdate.getTime())) / 1000) / 60) / 60) / 24)

  if (daysBetween > 7) {
      getDataFromScbAndTransferToFirebase()
  }

  return {
    props: {
        siteSections: adminData.val(),
        emissions: scbData.val().data,
    }
  }
}

export default function Home({ siteSections, emissions }) {

  return (
    <>
    <Head>
      <title>Sveriges utsläpp</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero pageElements={siteSections.find(elem => elem.name === 'hero')} />
    <Footer />
    </>
  )
}
