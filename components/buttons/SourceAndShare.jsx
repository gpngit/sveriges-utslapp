//CSS
import styled, {css} from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'

const Container = styled.div`
    ${flex('row')};
    gap: 20px;
    margin: 40px 0px;
`
const Button = styled.button`
    background-color: transparent;
    color: white;
    border: 3px solid white;
    border-radius: 10px;
    width: 100px;
    height: 40px;
`

const SourceAndShare = ({ sourceLink, shareLink }) => {

    return (
        <Container>
            <Button>Källa</Button>
            <Button>Dela</Button>
        </Container>
    )
}

export default SourceAndShare