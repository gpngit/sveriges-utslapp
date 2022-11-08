//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import Logo from '../../public/images/Greenpeace-logo-primarydark.png'

const Container = styled.header`
    ${flex()};
    gap: 60px;
    min-height: 100vh;
    padding: 30px;
    background-color: ${colors.primaryLight};
    color: ${colors.primaryDarK};
`
const Crumble = styled.div`
    ${flex('row', 'center', 'center')}
    align-self: center;
`
const ImageContainer = styled.div`
    height: 16px;
    margin-left: 8px;

    img {
        height: 100%;
        width: 100%;
    }
`
const TextContent = styled.div`
    ${flex()}
    gap: 20px;
    width: 70%;

    h1 {
        font-size: ${fontSizes.heading};
    }

    p {
        font-size: ${fontSizes.subheading};
    }
`

const Hero = ({ sectionDetails }) => {

    const {subheading, title, articles} = sectionDetails

    return (
        <Container>
            <Crumble>
                <p>En sammanställning av</p>
                <ImageContainer>
                    <Image src={Logo} alt='Greenpeace logo'/>
                </ImageContainer>
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