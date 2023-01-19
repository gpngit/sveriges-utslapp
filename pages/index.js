//Firebase
import initFirebase from '../firebase/initFirebase'
import { getDatabase, ref, child, get } from "firebase/database"
//SCB
import { getDataFromScbAndTransferToFirebase } from '../scb/fetch'
import styled from 'styled-components';
//components
import Hero from "../components/sections/hero/Hero"
import Footer from '../components/footer/Footer'
import Ingress from '../components/sections/ingress/Ingress'
import LineChart from '../components/lineChart/LineChart'
import FaktaPages from '../components/sections/yearlyFacts/FaktaPages'
import Sections from '../components/sections/sectionDifferentTypes/Sections'
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { colors, device, size } from "/styles/partials"
const Main = styled.main``

const Info = styled.div`
display:flex;
flex-direction:column;
padding: 4rem;
align-items:center;
min-height: 20vh;
background-color:${colors.primary};
`

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


  const context = useContext(AppContext)
  const {displayYear, setDisplayYear} = context

 
    
    console.log(emissions.filter(emission => emission.year== displayYear).filter(emissions=> emissions.type.val == "CO2-BIO").filter(emissions => emissions.sector.val === "0.1"), "testing")
  return (
    <Main>
     <Hero 
    pageElements={siteSections.find(elem => elem.name === 'hero')}
    navElementStatistik={siteSections.find(elem => elem.name === 'statistik')}
    navElementBiobransle={siteSections.find(elem => elem.name === 'biobränsle')}
    navElementSkogen={siteSections.find(elem => elem.name === 'skogen')} /> 
    
    <Ingress 
    pageElements={siteSections.find(elem => elem.name === 'ingress')}  />
   
    <LineChart 
    pageElements={siteSections.find(elem => elem.name === 'fossil-vs-bio')}  
    emissions={emissions}/>  
      <FaktaPages 
    pageOneElem={siteSections.find(elem => elem.name === 'faktaruta1')}
    pageTwoElem={siteSections.find(elem => elem.name === 'fakta-biobransle')}
    emissions={emissions} energiMyndighetenData={energiMyndighetenData} />  
     {/* <Info>
      <h2>Just nu är det något fel på datan från SCB.</h2>
      <p>Vi jobbar på att få ordning på problemet.</p>
    </Info> */}
    <Sections 
    pageOneElem= {siteSections.find(elem => elem.name === 'statistik')} sectionIDnameOne={"statistik"} 
    pageTwoElem ={siteSections.find(elem => elem.name === 'biobränsle')} sectionIDnameTwo={'biobränsle'}
    pageThreeElem = {siteSections.find(elem => elem.name === 'skogen')}
    sectionIDnameThree={"skogen"} />
    <Footer pageElements={siteSections.find(elem => elem.name === 'footer')}/>   
    </Main>
  )
}
