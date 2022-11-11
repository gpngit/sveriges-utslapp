//CSS
import styled from 'styled-components'
import { flex, colors } from '../../styles/partials'
//nextjs components
import Link from 'next/link'
//components
import Crumble from '../crumble/Crumble'

const Container = styled.footer`
    ${flex('column')}
    gap: 20px;
    height: 200px;
    padding: 30px;
    background-color: ${colors.secondary};
    color: ${colors.primary};

    a {
        color: ${colors.primary};
    }
`

const Footer = () => {

    return (
        <Container>
            <div>
                <Link href='/'><p>Start</p></Link>
                <Link href='/admin'><p>Admin</p></Link>
            </div>
            <Crumble color={colors.primary} />
        </Container>
    )
}

export default Footer