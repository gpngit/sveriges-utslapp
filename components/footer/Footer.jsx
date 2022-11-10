//CSS
import styled from 'styled-components'
import { flex, colors } from '../../styles/partials'
//nextjs components
import Link from 'next/link'
import Image from 'next/image'
//resources
import LogoLight from '../../public/images/Greenpeace-logo-primary.png'

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
const ImageContainer = styled.div`
    height: 30px;

    img {
        height: 100%;
        width: 100%;
    }
`

const Footer = () => {

    return (
        <Container>
            <div>
                <Link href='/'><p>Start</p></Link>
                <Link href='/admin'><p>Admin</p></Link>
            </div>
            <ImageContainer>
                <Image src={LogoLight} alt='Greenpeace logo' />
            </ImageContainer>
        </Container>
    )
}

export default Footer