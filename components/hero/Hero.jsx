import styled, {css} from 'styled-components'

const Container = styled.header`
    min-height: 100vh;
`
const Crumble = styled.div`

`
const TextContent = styled.div`

`

const Hero = ({ sectionDetails }) => {

    const {subheading, title, articles} = sectionDetails

    return (
        <Container>
            <Crumble></Crumble>
            <TextContent>
                <p>{subheading.heading}</p>
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