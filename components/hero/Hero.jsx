//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import LogoDark from '../../public/images/Greenpeace-logo-primarydark.png'
import BurningForest from '../../public/burning-forest.svg'

const Container = styled.header`
    ${flex()};
    gap: 60px;
    min-height: 100vh;
    padding: 30px;
    background-color: ${colors.primaryLight};
    color: ${colors.primaryDarK};
`
const ScrollContainer = styled.div`
    height: 50vh;
    position: sticky;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
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
    ${flex()};
    gap: 60px;
    padding: 40px;

    h1 {
        font-size: ${fontSizes.heading};
    }

    p {
        font-size: ${fontSizes.subheading};
    }
`
const TextAndLink = styled.div`
    ${flex('row', 'space-between')};
    gap: 80px;
    width: 100%;
`
const NavButton = styled.button`
    padding: 20px 40px;
    background-color: transparent;
    border: 3px solid ${colors.primaryDarK};
    border-radius: 10px;
`
const Blurred = styled.div`
    position: sticky;
    bottom: 0;
    height: 200px;
    width: 100%;
    background: linear-gradient(to top, ${colors.primaryLight}, transparent);
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
            <ScrollContainer>
                <TextContent>
                    <TextAndLink>
                        <p>{subheading.text.toUpperCase()}</p>
                    </TextAndLink>
                    <TextAndLink>
                        <h1>{title.text}</h1>
                        <NavButton>Hur ser siffrorna ut egentligen?</NavButton>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body1.text}</p>
                        <NavButton>Varför rapporteras de inte?</NavButton>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body2.text}</p>
                        <NavButton>Men är inte biobränslen bra för naturen?</NavButton>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body3.text}</p>
                        <NavButton>Men skogen växer väl upp igen och binder kolet?</NavButton>
                    </TextAndLink>
                </TextContent>
                <Blurred></Blurred>
            </ScrollContainer>
        </Container>
    )
}

export default Hero