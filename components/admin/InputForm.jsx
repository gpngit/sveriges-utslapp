//CSS
import styled from "styled-components"
import { flex,device, fonts, colors} from '../../styles/partials'

//firebase
import { getDatabase, ref, update } from "firebase/database";

//components
import InputContainer from "./InputContainer"
import LoadingSpinner from "../loader/LoadingSpinner";
import { capitalize } from "../helpers/Capitalize";
import Image from "next/image";
import arrow from "../../public/arrow_down.png"
// import ToggleSwitch from './ToggleSwitch'

//react hooks
import { useState } from "react"
import InputContainerFooter from "./InputContainerFooter";
import InputContainerFooterLinks from "./InputContainerFooterLinks";



const Form = styled.form`
width: 100%;
background-color:${props => props.hide ? `#e2e2e2` : "white"};
${flex()};
gap: 5px;
max-width:1200px;
padding:1rem;
`

const TitleAndReveal = styled.div`
width:100%;
${flex("column", "center", "center")}
gap:10px;
@media screen and ${device.tablet}{
    ${flex("row", "space-between", "center")}
}
h3{
    ${fonts.paragraph};
}

button{
    position:relative;
    right:0%;
    ${fonts.footnote};
    padding: 4px 6px;
    background-color: ${colors.bio};
    color: white;
    border:none;    
    &:hover{
        background-color:${colors.secondary};
        box-shadow: 0 0 1px ${colors.border};
    }
    &:focus{
        background-color: ${colors.fossil};
    }
    &:active{
        background-color:${colors.secondary};
    }
}
`
const Up = styled(Image)`
transform: rotate(180deg);`

const Row = styled.div`
${flex("row", "space-between", "center")}
gap:1rem;
p{
    ${fonts.footnote};
}
`
const ToggleOnOrOff = styled.div`
position: relative;
margin: 1rem;


input[type='range'] {
    -webkit-appearance: none;
    max-width:3rem;
    width:100%;
    background: transparent;
    border-radius:19px;
  }
  input[type='range']::-webkit-slider-runnable-track {
    height: 1.9rem;
    margin: 0;
    width: 100%;
    border-radius:19px;
    padding:0.2rem;
    cursor: pointer;
    background: ${colors.green};
  }
  
  input[type='range']::-moz-range-track {
    height: 1.9rem;
    margin: 0;
    border-radius:19px;
    padding:0.2rem;
    width: 100%;
    cursor: pointer;
    background: ${colors.green};
  }
  
  input[type='range']::-ms-track {
    height: 2rem;
    border-radius:19px;
    padding:0.2rem;
    margin: 0;
    width: 100%;
    cursor: pointer;
    color: transparent;
    background: ${colors.green};
  }
  
  input[type='range']::-ms-fill-lower {
    background: transparent;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.6rem;
    width: 1.6rem;
    background: ${colors.white};
    border:none;
    cursor:pointer;
    
  }

  input[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    height: 1.6rem;
    width: 1.6rem;
    cursor:pointer;
    background: ${colors.white};
    border:none;
    border-radius:50%;

  }
  
  input[type='range']::-ms-thumb {
    cursor:pointer;
    -webkit-appearance: none;
    height: 1.6rem;
    width: 1.6rem;
    background: ${colors.white};
    border:none;
    border-radius:50%;
   
  }

  input[type='range']:focus {
    outline: none;
  }
  
  input[type='range']:focus::-webkit-slider-thumb {
    box-shadow: 0px 0px 7px 3px ${colors.bio};
  }
  
  input[type='range']:focus::-moz-range-thumb {
    box-shadow: 0px 0px 7px 3px ${colors.bio};
  }
  
  input[type='range']:focus::-ms-thumb {
    box-shadow: 0px 0px 7px 3px ${colors.bio};
  }
  
`
const Label = styled.label`
padding-right:1rem;

position:relative;

${fonts.footnote};
`


const ToggleSwitch = styled.label`
    position: relative;
    width: 60px;
    height: 34px;
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: grey;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: ${colors.white};
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: ${colors.green};
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

`

const InputForm = ({ pageElements }) => {

    const {id, name, show, toggleShow, type, sections} = pageElements
    const [showSection, setShowSection] = useState(false)
    const [visible, setVisible] = useState(show)
    const handleShowClick = (e) => {
        e.preventDefault()
        setShowSection(!showSection)
    }
    const showOrHidePage = (index, bool) => {
        const db = getDatabase()
        const dbRef = ref(db, `/admin/${index}`)
        update(dbRef, {show: bool})
    }
    const handleVisibility = (index) => {
        showOrHidePage(index, !visible)
        setVisible(!visible)
    } 

    return (
        <Form className="form"
        >
            <TitleAndReveal>
            <h3>{capitalize(type)}</h3>
            {toggleShow ? 
            <Row>

            <ToggleSwitch 
            role="slider"
            id={`toggle-${id}`}
            aria-label="Stäng av/Sätt på en sektion"
            type="range"
            htmlFor={`switch-${id}`}>
                <input onChange={() => handleVisibility(id-1)} 
                type="checkbox" 
                id={`switch-${id}`} 
                aria-labelledby = {`toggle-${id}`}
                checked={visible ? true : false} />
                <span 
                className="slider round"></span>
            </ToggleSwitch>
            <p>{show ? 'Information kan ses på sidan' : 'Information visas inte på sidan'}</p>
            </Row>
            :(null)} 
            {visible ? (<>
            <button onClick={(e) => handleShowClick(e)}>
            {showSection ? 
                <Up alt="Visa mindre"
                type="Button"
                aria-label="Visa mindre" 
                src={arrow}
                width={20}
                height={10}/>
                :  (
                <Image alt="Visa mer"
                type="Button"
                aria-label="Visa mer" 
                src={arrow}
                width={20}
                height={10}/>)}</button></>):(null)}
            </TitleAndReveal>
            {visible ? (<>
      
            
            {name === "footer" ? (<>
            {showSection && <> 
            {sections.map((section, i) => {
            return (<>
                  <InputContainerFooter 
                  key={`${i}${id}`}
                  sectionId={id} 
                  input={section} 
                  inputIndex={i} 
                  sectionName={name} 
                  />
                  </>
              )
            })}
            
            <h3>LÄNKAR:</h3>
            {/* <p>Viktigt: kom ihåg att ha med hela adressen, dvs &apos;&apos;https://&apos;&apos; när du skriver in URL:en.</p> */}
         
            {sections.map((section, i) => {
              return (<>

                <InputContainerFooterLinks
                  key={`${id}${i}`} 
                  sectionId={id} 
                  input={section} 
                  inputIndex={i} 
                  sectionName={name} 
                  />
                  </>
              )
            })}
            </>}
            </>
            ):(  
            <>
            {showSection && sections.map((section, i) => {
              return (
              <InputContainer sectionId={id} 
              key={i} 
              input={section} 
              inputIndex={i} 
              sectionName={name} 
            />
              )
          })}
          </>
          ) }
            </>):(null)}
   
            
        </Form>
       
    )
}

export default InputForm