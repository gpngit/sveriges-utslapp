//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import LogoDark from '../../public/images/Greenpeace-logo-primarydark.png'

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

const Hero = ({ pageElements }) => {

    const {id, sections, name} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const body3 = sections.find(section => section.name === 'body3')

    return (
        <Container>
            <Crumble>
                <p>En sammanställning av</p>
                <ImageContainer>
                    <Image src={LogoDark} alt='Greenpeace logo'/>
                </ImageContainer>
            </Crumble>
            <TextContent>
                <p>{subheading.text.toUpperCase()}</p>
                <h1>{title.text}</h1>
                <p>{body1.text}</p>
                <p>{body2.text}</p>
                <p>{body3.text}</p>
            </TextContent>
        </Container>
    )
}

export default Hero