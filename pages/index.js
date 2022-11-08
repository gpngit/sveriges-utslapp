//Nextjs components
import Head from 'next/head'
//Firebase
import initFirebase from '../firebase/initFirebase'
import { getDatabase, ref, child, get } from "firebase/database"

export async function getServerSideProps(){

  initFirebase()
  const db = getDatabase()
  const dbRef = ref(db)
  let adminData = await get(child(dbRef, 'admin/'))
  let scbData = await get(child(dbRef, 'scb/'))
  return {
      props: {
         pages: Object.values(adminData.val()),
         scb: Object.values(scbData.val())
      }
  }
}

export default function Home({ pages, scb }) {

  return (
    <>
    <Head>
      <title>Sveriges utsläpp</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
     
    </>
  )
}
