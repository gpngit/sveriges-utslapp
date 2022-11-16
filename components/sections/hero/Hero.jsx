//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes, fonts } from '../../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import BurningForest from '../../../public/burning-forest2.png'
import Arrow from '../../../public/arrow.svg'
//components
import Crumble from '../../../components/crumble/Crumble'

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
        height: 100%;
        object-fit: cover;
        bottom: 0;
        pointer-events: none;
    }
`
const ScrollContainer = styled.div`
    height: 100vh;
    width: 100%;
    position: sticky;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`
const TextContent = styled.div`
    ${flex()};
    gap: 30px;
    padding: 30px;

    h1 {
    ${fonts.heading};
   
    }

    p {
        ${fonts.subheading};
        
    }
`
const TextAndLink = styled.div`
    ${flex('row', 'flext-start', 'center')};
    gap: 40px;
    width: 100%;

    @media (max-width: 768px) {
        ${flex('column')};
        gap: 10px;
    }
`
const NavLink = styled.a`
    text-decoration: none;
    text-align: center;
    padding: 14px 20px;
    // // font-size: ${fontSizes.paragraph};
    ${fonts.paragraph};
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border: 3px solid ${colors.secondary};
    border-radius: 10px;
    margin-right: 5vw;
`
const Blurred = styled.div`
    position: sticky;
    height: 60vh;
    width: 100%;
    pointer-events: none;
    
    &.bottom {
        bottom: 0;
        background: linear-gradient(to top, ${colors.primary} 20vh, transparent);
    }
    
    /* &.top {
        top: 60px;
        background: linear-gradient(to bottom, ${colors.primary}, transparent);
    } */
`
const ImageContainer = styled.div`
    min-width: 100px;

    img {
        height: 100%;
        width: 100%;
    }

    @media (max-width: 768px) {
        display: none;
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
            <ScrollContainer>
                <Crumble color={colors.secondary}/>
                {/* <Blurred className='top' /> */} 
                <TextContent>
                    <TextAndLink>
                        <p>{subheading.text.toUpperCase()}</p>
                        {/* ingen länk här */}
                    </TextAndLink>
                    <TextAndLink>
                        <h1>{title.text}</h1>
                        <ImageContainer>
                            <Image src={Arrow} alt='arrow' />
                        </ImageContainer>
                        <NavLink href='#ingress'>Hur ser siffrorna ut egentligen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body1.text}</p>
                        <ImageContainer>
                            <Image src={Arrow} alt='arrow' />
                        </ImageContainer>
                        <NavLink href="#faktaruta1">Varför rapporteras de inte?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body2.text}</p>
                        <ImageContainer>
                            <Image src={Arrow} alt='arrow' />
                        </ImageContainer>
                        <NavLink href="#faktaruta2">Men är inte biobränslen bra för naturen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body3.text}</p>
                        <ImageContainer>
                            <Image src={Arrow} alt='arrow' />
                        </ImageContainer>
                        <NavLink href="#kolcykeln">Men skogen växer väl upp igen och binder kolet?</NavLink>
                    </TextAndLink>
                </TextContent>
                <Blurred className='bottom' />
            </ScrollContainer>
            <Image priority className='burning-forest' src={BurningForest} alt='burning forest graphic'/>
        </Container>
    )
}

export default Hero