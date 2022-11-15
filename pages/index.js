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

import Slider from '../components/slider/Slider'
import LineChartVersion1 from '../components/lineChart/LineChartVersion1'

import YearChanger from '../components/year-changer/YearChanger'
import Ingress from '../components/sections/ingress/Ingress'
import LineChart from '../components/lineChart/LineChart'
import FaktaOne from '../components/sections/yearlyFacts/faktaOne'
import FaktaTwo from '../components/sections/yearlyFacts/faktaTwo'
import FaktaPages from '../components/sections/yearlyFacts/FaktaPages'
import SectionTypeOne from '../components/sections/sectionDifferentTypes/SectionOnePicture'
import SectionTypeTwo from "../components/sections/sectionDifferentTypes/SectionTwoPictures"


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
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
      // console.log(scrollPercentage)
    })

    const observer = new IntersectionObserver((entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id)
          }
      })
      }),{threshold: 0.6})

    let sections = document.querySelectorAll('section')
    sections.forEach(section => observer.observe(section))  
  }, [])

  return (
    <>
    <HeadContent/>
    <Hero pageElements={siteSections.find(elem => elem.name === 'hero')} />
    <Ingress pageElements={siteSections.find(elem => elem.name === 'ingress')}  />
    
    <LineChart emissions={emissions}/>
    <YearChanger emissions={emissions} />
    {/* <Slider emissions={emissions}/> */}
    <FaktaPages pageOneElem={siteSections.find(elem => elem.name === 'faktaOne')}
    pageTwoElem={siteSections.find(elem => elem.name === 'faktaTwo')}
    emissions={emissions}/>
   
    <SectionTypeOne pageElements={siteSections.find(elem => elem.name === 'regler')} />
    <SectionTypeTwo pageElements={siteSections.find(elem => elem.name === 'kolcykeln')} /> 
    <SectionTypeOne pageElements={siteSections.find(elem => elem.name === 'regler')} />
    <SectionTypeTwo pageElements={siteSections.find(elem => elem.name === 'kolcykeln')} /> 
 
    <Footer/>
    </>
  )
}
