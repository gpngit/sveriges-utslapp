//CSS
import styled from 'styled-components'
import { flex, colors } from '../../styles/partials'

const Container = styled.header`
    ${flex()};
    gap: 40px;
    min-height: 100vh;
    padding: 30px;
    background-color: ${colors.primaryLight};
    color: ${colors.primaryDarK};
`
const Crumble = styled.div`
    align-self: center;
`
const TextContent = styled.div`
    ${flex()}
    gap: 20px;
    width: 70%;

    h1 {
        font-size: 36px;
    }

    p {
        font-size: 24px;
    }
`

const Hero = ({ sectionDetails }) => {

    const {subheading, title, articles} = sectionDetails

    return (
        <Container>
            <Crumble>
                <p>En sammanställning av <span>GREENPEACE</span></p>
            </Crumble>
            <TextContent>
                <p>{subheading.heading.toUpperCase()}</p>
                <h1>{title.heading}</h1>
                {articles.map(article => {
                    return (
                        <p>{article.article}</p>
                    )
                })}
            </TextContent>
        </Container>
    )
}

export default Hero