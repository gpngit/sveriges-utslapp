//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import LogoDark from '../../public/images/Greenpeace-logo-secondary.png'
import BurningForest from '../../public/burning-forest.svg'
import Arrow from '../../public/arrow.svg'

const Container = styled.header`
    position: relative;
    ${flex()};
    gap: 40px;
    min-height: 120vh;
    background-color: ${colors.primary};
    color: ${colors.secondary};

    .burning-forest {
        position: absolute;
        width: 100%;
        object-fit: cover;
        bottom: 0;
    }
`
const ScrollContainer = styled.div`
    height: 60vh;
    width: 80vw;
    position: sticky;
    overflow-y: auto;
    z-index: 10;

    &::-webkit-scrollbar {
        display: none;
    }
`
const Crumble = styled.div`
    ${flex('row', 'center', 'center')}
    align-self: center;
    padding: 20px;
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
    gap: 30px;
    padding: 40px;

    h1 {
        font-size: ${fontSizes.desktopHeading};
    }

    p {
        font-size: ${fontSizes.desktopSubheading};
    }
`
const TextAndLink = styled.div`
    ${flex('row', 'flext-start', 'center')};
    gap: 60px;
    width: 100%;
`
const NavButton = styled.button`
    padding: 14px 20px;
    background-color: ${colors.primary};
    color: ${colors.secondary}
    border: 3px solid ${colors.secondary};
    border-radius: 10px;
`
const Blurred = styled.div`
    position: sticky;
    height: 100px;
    width: 100%;
    
    &.bottom {
        bottom: 0;
        background: linear-gradient(to top, ${colors.primary} 20px, transparent);
    }
    
    /* &.top {
        top: 60px;
        background: linear-gradient(to bottom, ${colors.primary}, transparent);
    } */
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
                {/* <Blurred className='top' /> */} 
                <TextContent>
                    <TextAndLink>
                        <p>{subheading.text.toUpperCase()}</p>
                    </TextAndLink>
                    <TextAndLink>
                        <h1>{title.text}</h1>
                        <Image src={Arrow} alt='arrow' />
                        <NavButton>Hur ser siffrorna ut egentligen?</NavButton>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body1.text}</p>
                        <Image src={Arrow} alt='arrow' />
                        <NavButton>Varför rapporteras de inte?</NavButton>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body2.text}</p>
                        <Image src={Arrow} alt='arrow' />
                        <NavButton>Men är inte biobränslen bra för naturen?</NavButton>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body3.text}</p>
                        <Image src={Arrow} alt='arrow' />
                        <NavButton>Men skogen växer väl upp igen och binder kolet?</NavButton>
                    </TextAndLink>
                </TextContent>
                <Blurred className='bottom' />
            </ScrollContainer>
            <Image className='burning-forest' src={BurningForest} alt='burning forest graphic'/>
        </Container>
    )
}

export default Hero