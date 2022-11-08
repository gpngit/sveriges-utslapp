//CSS
import styled from 'styled-components'
import { flex, colors } from '../../styles/partials'
// react hooks
import { useState } from 'react'

const Container = styled.main`
    min-height: 100vh;
    padding: 30px;
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
        width: 300px;
        padding: 10px;
    }
`
const ErrorMessage = styled.p`

`
const Button = styled.button`
    width: 300px;
    padding: 10px;
`

const Login = ({ setAuthenticated }) => {

    const [error, setError] = useState(null)

    const login = (e) => {
        e.preventDefault()
        const {username, password} = e.target
        if (username.value === process.env.NEXT_PUBLIC_ADMIN_USERNAME && password.value === process.env.NEXT_PUBLIC_ADMIN_PASSWORD){
            setAuthenticated(true)
        } else {
            setError('Användarnamn och lösenord matchar inte')
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