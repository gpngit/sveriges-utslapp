//CSS
import styled from 'styled-components'
import { flex, colors, fontSizes } from '../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import BurningForest from '../../public/burning-forest.svg'
import Arrow from '../../public/arrow.svg'
//components
import Crumble from '../crumble/Crumble'

const Container = styled.header`
    position: relative;
    ${flex()};
    gap: 40px;
    min-height: 100vh;
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
    height: 75vh;
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
        font-size: ${fontSizes.heading};
    }

    p {
        font-size: ${fontSizes.subheading};
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
    font-size: ${fontSizes.paragraph};
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border: 3px solid ${colors.secondary};
    border-radius: 10px;
    margin-right: 5vw;
`
const Blurred = styled.div`
    position: sticky;
    height: 100px;
    width: 100%;
    pointer-events: none;
    
    &.bottom {
        bottom: 0;
        background: linear-gradient(to top, ${colors.primary} 30px, transparent);
    }
    
    /* &.top {
        top: 60px;
        background: linear-gradient(to bottom, ${colors.primary}, transparent);
    } */
`
const ImageContainer = styled.div`
    min-width: 100px;

    img {
        max-height: 100%;
        max-width: 100%;
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
                        <NavLink href='#second-section'>Hur ser siffrorna ut egentligen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body1.text}</p>
                        <ImageContainer>
                            <Image src={Arrow} alt='arrow' />
                        </ImageContainer>
                        <NavLink onClick={(e) => console.log(e)}>Varför rapporteras de inte?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body2.text}</p>
                        <ImageContainer>
                            <Image src={Arrow} alt='arrow' />
                        </ImageContainer>
                        <NavLink onClick={(e) => console.log(e)}>Men är inte biobränslen bra för naturen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body3.text}</p>
                        <ImageContainer>
                            <Image src={Arrow} alt='arrow' />
                        </ImageContainer>
                        <NavLink onClick={(e) => console.log(e)}>Men skogen växer väl upp igen och binder kolet?</NavLink>
                    </TextAndLink>
                </TextContent>
                <Blurred className='bottom' />
            </ScrollContainer>
            <Image className='burning-forest' src={BurningForest} alt='burning forest graphic'/>
        </Container>
    )
}

export default Hero