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
    gap: 40px;
    min-height: 100vh;
    background-color: ${colors.primaryLight};
    color: ${colors.primaryDarK};

    .burning-forest {
        position: absolute;
        width: 100%;
        object-fit: cover;
        bottom: 0;
    }
`
const ScrollContainer = styled.div`
    margin-bottom: 100px;
    height: 300px;
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
    background-color: ${colors.primaryLight};
    border: 3px solid ${colors.primaryDarK};
    border-radius: 10px;
`
const Blurred = styled.div`
    position: sticky;
    height: 100px;
    width: 100%;
    
    &.bottom {
        bottom: 0;
        background: linear-gradient(to top, ${colors.primaryLight} 20px, transparent);
    }
    
    /* &.top {
        top: 60px;
        background: linear-gradient(to bottom, ${colors.primaryLight}, transparent);
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
                <Blurred className='bottom' />
            </ScrollContainer>
            <Image className='burning-forest' src={BurningForest}/>
        </Container>
    )
}

export default Hero