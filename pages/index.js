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
import YearChanger from '../components/year-changer/YearChanger'
import Ingress from '../components/sections/ingress/Ingress'
import LineChart from '../components/lineChart/LineChart'
import FaktaPages from '../components/sections/yearlyFacts/FaktaPages'
import SectionOne from '../components/sections/sectionDifferentTypes/SectionOne'
import SectionTwo from '../components/sections/sectionDifferentTypes/SectionTwo'
import SectionThree from '../components/sections/sectionDifferentTypes/SectionThree'

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

// const showSections = siteSections.filter(item => item.show);
//  console.log(showSections, "shown")
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



  return (
    <>
   
    <Hero pageElements={siteSections.find(elem => elem.name === 'hero')} /> 
    <Ingress pageElements={siteSections.find(elem => elem.name === 'ingress')}  />
    <LineChart pageElements={siteSections.find(elem => elem.name === 'fossil-vs-bio')}  
    emissions={emissions}/>
    <YearChanger emissions={emissions} />
    <FaktaPages pageOneElem={siteSections.find(elem => elem.name === 'faktaruta1')}
    pageTwoElem={siteSections.find(elem => elem.name === 'fakta-biobransle')}
    emissions={emissions}/>
    <SectionOne 
    pageElements={siteSections.find(elem => elem.name === 'statistik')}
    sectionIDname={"statistik"} />
    <SectionTwo pageElements={siteSections.find(elem => elem.name === 'kolcykeln')}
    sectionIDname={"kolcykeln"} />
    <SectionThree pageElements={siteSections.find(elem => elem.name === 'skogen')}
    sectionIDname={"skogen"} />
    <Footer pageElements={siteSections.find(elem => elem.name === 'footer')}/> 
    </>
  )
}
