//CSS
import styled from 'styled-components'
import { flex } from '../../styles/partials'
//resources
import GreenpeaceLogo from '../../public/GreenpeaceLogo'
import Link from 'next/link'

const Container = styled.div`
    ${flex('column', 'center', 'center')};
    gap: 10px;
    align-self: center;
    padding: 20px;
    font-size: 16px;
    a{
        &:hover{
            cursor:pointer;
        }
    }
`

const Crumble = ({ color }) => {
    return (
        <Container>
            <p>En sammanställning av</p>
            <Link 
            href={"https://www.greenpeace.org/sweden/"} 
            target="_blank"
            aria-label='Link to Greenpeace'>
            <GreenpeaceLogo 
            role="img"
            alt='Se Greenpeace:s logotyp' 
            color={color} />
            </Link>
        </Container>
    )
}

export default Crumble