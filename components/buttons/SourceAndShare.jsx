//CSS
import styled, {css} from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'

const Container = styled.div`
    ${flex('row')};
    gap: 20px;
`
const LinkButton = styled.a`
    ${flex('row', 'center', 'center')}
    background-color: transparent;
    text-decoration: none;
    color: white;
    border: 3px solid white;
    border-radius: 10px;
    width: 100px;
    height: 40px;
`

const SourceAndShare = ({ sourceLink, shareLink }) => {

    return (
        <Container>
            <LinkButton href={sourceLink}>Källa</LinkButton>
            <LinkButton href={shareLink}>Dela</LinkButton>
        </Container>
    )
}

export default SourceAndShare