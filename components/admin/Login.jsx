//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
// react hooks
import { useState, useEffect } from 'react'
import LoadingSpinner from '../loader/LoadingSpinner'

const Container = styled.main`
    min-height: 100vh;
    width:100%;
    padding: 30px;
    background-color:${colors.primary};
    color:${colors.secondary};
    
`
const LoginForm = styled.form`
    ${flex('column', 'center', 'flex-start')}
    gap: 10px;
    border-radius: 10px;
`
const InputAndlabel = styled.div`
    ${flex('column', 'center')}

    label {
        display: none;
    }

    input {
        border-color: ${colors.bio};
        width: 300px;
        padding: 10px;
    }
    input:focus{
        outline: none;
    border:2px solid ${colors.bio};
    box-shadow: 0 0 10px ${colors.border};
    }
`
const ErrorMessage = styled.p`
font-size:${fontSizes.paragraph}

`
const Button = styled.button`
    width: 300px;
    padding: 10px;
    background-color:${colors.bio};
    color: white;
    border-radius:19px;
    border:none;
  
    &:hover{
        background-color:${colors.secondary};
        box-shadow: 0 0 1px ${colors.border};
    }
    &:focus{
        background-color:${colors.fossil};
        
    }
`

const Login = ({ setAuthenticated }) => {

    const [error, setError] = useState(null)


    const login = (e) => {
        e.preventDefault()
        const {username, password} = e.target
        if (username.value === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password.value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD){
            setLoading(true)
            setAuthenticated(true)
        } 
        else if(username.value === ""|| password.value === ""){
        setError('Du har glömt fylla i något av fälten.')
        }
        else if(username.value !== process.env.NEXT_PUBLIC_ADMIN_USERNAME){
            console.log(username.value)
        setError('Användaren finns inte.')
        }
        else if(username.value === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password.value !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
        { setError('Lösenordet stämmer inte.')}
        else {
        setError('Användarnamn och lösenord matchar inte.')
        }
        e.target.reset()
    }

    return (
        <Container>
            <LoginForm onSubmit={(e) => login(e)} onFocus={() => setError(null)}>
                <h1>Logga in</h1>
                <InputAndlabel>
                    <label htmlFor="username">Användarnamn</label>
                    <input placeholder="Användarnamn" name="username" type="text" id="username" autoComplete='off'/>
                </InputAndlabel>
                <InputAndlabel>
                    <label htmlFor="passwordInput">Lösenord:</label>
                    <input name="password" placeholder="*******" type="password" id="passwordInput" />
                </InputAndlabel>
               
                <ErrorMessage>{error}</ErrorMessage>
                <Button>Logga in</Button>
            </LoginForm>
        </Container>
    )
}

export default Login