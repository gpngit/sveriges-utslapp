import styled, {css} from 'styled-components'

const Container = styled.header`
    min-height: 100vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    background-color: #f2cebd; //primaryLight
    color: #540707; // primaryDark
`
const Crumble = styled.div`
    align-self: center;
`
const TextContent = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;

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