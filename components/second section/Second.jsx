//CSS
import styled from 'styled-components'
import { flex, colors } from '../../styles/partials'

const Container = styled.section`
    height: 60vh;
    background-color: ${colors.secondary};
    padding: 60px;
    color: white;
`

const Second = ({ pageElements }) => {

    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')

    return (
        <Container>hej</Container>
    )
}

export default Second