//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
//resources
import GreenpeaceLogo from '../../public/GreenpeaceLogo'

const Container = styled.div`
    ${flex('row', 'center', 'center')};
    gap: 10px;
    align-self: center;
    padding: 20px;
`

const Crumble = ({ color }) => {

    return (
        <Container>
            <p>En sammanställning av</p>
            <GreenpeaceLogo alt='Greenpeace-logo' color={color} />
        </Container>
    )
}

export default Crumble