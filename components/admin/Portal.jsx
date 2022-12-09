//CSS
import styled from 'styled-components'
import { flex, colors, fonts, device } from '../../styles/partials'
//react hooks
import { useEffect, useState } from 'react'
//firebase
import initFirebase from '../../firebase/initFirebase'
import { getDatabase, ref, onValue } from "firebase/database"
//components
import InputForm from './InputForm'
import Link from 'next/link'

const Container = styled.main`
    background-color:${colors.primary};
    ${flex()};
    gap: 2rem;

    padding: 2rem;
    padding-top:4rem;

    .header-and-logout {
        ${flex('column-reverse', 'space-between', 'center')}
        width: 100%;
        gap:2rem;
        @media screen and ${device.tablet}{
            gap:0;
            ${flex('row', 'space-between', 'center')}
        }
        h2{
            ${fonts.heading};
            color:${colors.secondary};
        }

        button{
            background-color:${colors.bio};
            color: white;
            padding:10px;
            border:none;
            border-radius:9px;
            ${fonts.footnote};
            &:hover{
                background-color:${colors.secondary};
                box-shadow: 0 0 1px ${colors.border};
            }
            &:focus{
                background-color:${colors.fossil};
            }
        }
        span{
            ${flex("row")}
            gap:10px;
        }
    }
    @media screen and ${device.tablet}{
        padding:4rem;
    }
`

export const Tutorial = styled.span`
    background-color: #e2e2e2;
    padding:1rem;
    border-radius:19px;
        .spanInsidespan{
        display: block;
        position:relative;
        left: 30%;
        }
`


const Portal = ({ setAuthenticated }) => {

    const [sections, setSections] = useState(null)

    const getDataFromFirebase = (route) => {
        const db = getDatabase()
        const dbRef = ref(db, route)
        onValue(dbRef, (snapshot) => {
        setSections(snapshot.val())
        })
    }

    useEffect(() => {
        initFirebase()
        getDataFromFirebase('admin/')
    }, [])

    const changePlace = (array, fromIndex, toIndex)=>{
        let element = array[fromIndex];
        array.splice(fromIndex, 1);
        array.splice(toIndex, 0, element)
    }

    console.log(sections);

    return (
        <Container>
            <div className='header-and-logout'>
                <h2>Adminportal</h2>
                <span>
                    <button onClick={() => setAuthenticated(false)}>
                    Logga ut
                    </button>
                    <Link href="/" 
                    target="_blank"
                    >
                        <button>
                        Hem</button>
                    </Link>
                </span>
            </div>
            {sections && sections.map((section, indx) => {
                if(section.name ==="fossil-vs-bio"){
                    changePlace(sections, indx, 2 )
                }
                return (<>
                    <InputForm 
                    key={section.id} 
                    pageElements={section}>
                    </InputForm>
                    </>
                )
            })}
            <Tutorial>
            <h3>Bra att veta:</h3>
            <p>För att göra radbryt i din text, skriv kommandot &lt;br/&gt;. <br/>Till exempel: Mening 1 
            <strong>&lt;br/&gt; </strong>
            Mening 2. 
            <br/>
            Resultatet blir då: 
            <span className="spanInsidespan"> 
            <br/> Mening 1 
            <br/>Mening 2.
            </span> 
            <br/>
            <strong>Viktigt:</strong> detta fungerar bara på fält märkta BODY1, BODY2 eller BODY3.</p>
            </Tutorial>
        </Container>
    )
}

export default Portal