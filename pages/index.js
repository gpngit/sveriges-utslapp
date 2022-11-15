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
import Hero from './sections/hero/Hero'
import Footer from '../components/footer/Footer'

import Slider from '../components/slider/Slider'
import BarChart from '../components/barchart/BarChart'
import LineChartVersion1 from '../components/lineChart/LineChartVersion1'
import YearChanger from '../components/year-changer/YearChanger'
import Ingress from './sections/ingress/Ingress'
import FaktaOne from './sections/yearlyFacts/factsOne/faktaOne'
import FaktaTwo from './sections/yearlyFacts/factsTwo/faktaTwo'
import SectionTypeOne from './sections/sectionDifferentTypes/SectionOnePicture'
import SectionTypeTwo from './sections/sectionDifferentTypes/SectionTwoPictures'
import SectionTypeThree from './sections/sectionDifferentTypes/SectionNoPicture'
import LineChart from '../components/lineChart/LineChart'

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
    <Slider emissions={emissions}/>
    <FaktaOne pageElements={siteSections.find(elem => elem.name === 'faktaOne')}
    emissions={emissions}/>
    <FaktaTwo pageElements={siteSections.find(elem => elem.name === 'faktaTwo')}
    emissions={emissions}/>
     <SectionTypeOne pageElements={siteSections.find(elem => elem.name === 'regler')} />
    <SectionTypeTwo pageElements={siteSections.find(elem => elem.name === 'kolcykeln')} /> 
    {/* <SectionTypeThree pageElements={siteSections.find(elem => elem.name === 'international')}/> */}
 
    <Footer />
    </>
  )
}
