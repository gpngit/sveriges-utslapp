//Firebase
import initFirebase from '../firebase/initFirebase'
import { getDatabase, ref, child, get } from "firebase/database"
//SCB
import { getDataFromScbAndTransferToFirebase } from '../scb/fetch'
//react hooks
import { useEffect } from 'react'
//custom head:
import HeadContent from '../components/Head'
//components
import Hero from "../components/sections/hero/Hero"
import Footer from '../components/footer/Footer'

import Ingress from '../components/sections/ingress/Ingress'
import LineChart from '../components/lineChart/LineChart'
import FaktaPages from '../components/sections/yearlyFacts/FaktaPages'


import Sections from '../components/sections/sectionDifferentTypes/Sections'

export async function getServerSideProps(){
  initFirebase()
  const db = getDatabase()
  const dbRef = ref(db)

  let adminData = await get(child(dbRef, 'admin/'))
  let scbData = await get(child(dbRef, 'scb/'))
  let energiMyndighetenData = await get(child(dbRef, 'energimyndigheten/'))

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
        energiMyndighetenData: energiMyndighetenData.val()
    }
  }
}

export default function Home({ siteSections, emissions, energiMyndighetenData }) {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      // console.log(scrollPercentage)
    })

    const observer = new IntersectionObserver((entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log(entry.target.id)
          }
      })
    }),{threshold: 0.6})

    let sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))  

    }, [])
    console.log(siteSections)

  return (
    <>
    <Hero pageElements={siteSections.find(elem => elem.name === 'hero')} /> 
    <Ingress pageElements={siteSections.find(elem => elem.name === 'ingress')}  />
    <LineChart pageElements={siteSections.find(elem => elem.name === 'fossil-vs-bio')}  
    emissions={emissions}/>
    <FaktaPages pageOneElem={siteSections.find(elem => elem.name === 'faktaruta1')}
    pageTwoElem={siteSections.find(elem => elem.name === 'fakta-biobransle')}
    emissions={emissions} energiMyndighetenData={energiMyndighetenData} />
    <Sections 
    pageOneElem= {siteSections.find(elem => elem.name === 'statistik')} sectionIDnameOne={"statistik"} 
    pageTwoElem ={siteSections.find(elem => elem.name === 'kolcykeln')} sectionIDnameTwo={'kolcykeln'}
    pageThreeElem = {siteSections.find(elem => elem.name === 'skogen')}
    sectionIDnameThree={"skogen"} />
    <Footer pageElements={siteSections.find(elem => elem.name === 'footer')}/> 
    </>
  )
}
