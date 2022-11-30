//CSS
import styled from 'styled-components'
import { flex, colors, device, fonts, size } from '../../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import BurningForest from '../../SVG\'s/BurningForest'
import Arrow from '../../../public/arrow.svg'
//components
import Crumble from '../../../components/crumble/Crumble'
import { ArrowStyleOne, ArrowStyleTwo, ArrowStyleThree, ArrowStyleFour } from '../../SVG\'s/Arrows'

const Container = styled.header`
    position: relative;
    ${flex('column', 'center', 'center')};
    min-height: 100vh;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    
    .burning-forest {
        height: 100%;
        width: 100%;
        position: absolute;
        overflow: hidden;
        bottom: 0;
        white-space:nowrap;
        pointer-events: none;

        svg {
            object-fit: cover;
            position:absolute;
            right: 0;
            bottom: 0;
            width: 100%;

            @media (max-width: 1350px){
                width: 120%;
            }

            @media (max-width: 900px){
                width: 140%;
            }

            @media (max-width: 650px){
                width: 160%;
            }

            @media (max-width: 450px){
                width: 200%;
            }

        }

        svg.embers{
            animation: embers 7s infinite ease-in;
            opacity: 0;
            z-index:0;
        }

        svg#forest{
            z-index: 1;
        }

        svg#ember-1{
        z-index: 2;
        animation-delay: 0s;
        left: -50%;
        width: 150%;
        bottom: -20%;
        transform: skewX(-0.1rad);
        }

        svg#ember-2{
        z-index: 2;
        animation-delay: 2.1s;
        left: -50%;
        width: 150%;
        bottom: -20%;
        transform: skewX(-0.1rad);
        }
        svg#ember-3{
        transform: scaleX(-1);
        animation-delay: 4.2s;
        left: 60%;
        transform: skewX(0.2rad);
        }

        svg.smoke{
        animation: smoke 12s infinite ease-in;
        opacity: 0;
        z-index:0;
        }

        svg#smoke-2{
        animation-delay: 2s;
        animation-duration: 8s;
        }

        @keyframes embers{
        0%{
            transform: translate(0,20%) scaleY(1) scaleX(1);
            opacity; 0;
        }
        8%{
            opacity: 1;
        }
        42%{
            opacity: 1;
        }
        50%{
            transform: translate(0,10%) scaleY(1.3) scaleX(1) skewX(0.5rad);
            opacity: 0;
        }
        55%{
            transform: translate(0,20%) scaleY(1) scaleX(-1);
            opacity; 0;
        }
        59%{
            opacity: 1;
        }
        90%{
            opacity: 1;
        }
        100%{
            transform: translate(0,10%) scaleY(1.2) skewX(0.7rad) scaleX(-1);
            opacity: 0;
        }
    }
}

    @keyframes smoke{
        0%{
        transform: translate(0,0%) scaleY(1);
        opacity: 0.4;
        }
        42%{
        opacity: 0.8;
        }
        60%{
        transform: translate(0,-20%) scaleY(1.5) skewX(-0.5rad);
        opacity: 0.3;
        }
        90%{
        transform: translate(0,-5%) scaleY(1) skewX(-0.5rad);
        opacity; 0;
        }
    }
`
const ScrollContainer = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 1568px;
    position: sticky;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
   
`
const TextContent = styled.div`
    ${flex()};
    gap: clamp(30px, 50vh, 80px);
    
    h1 {
        ${fonts.heading};
        margin-top:-4rem;

    }
    p {
        ${fonts.subheading};
        line-height:120%;
    }
`
const TextAndLink = styled.div`
    ${flex('column')};
    gap: 20px;
    svg {
        display: none;
    }
    @media ${device.tablet} {
        ${flex('row', 'flext-start', 'center')};
        gap: 20px;
        width: 100%;
        
        svg{
        display:block;
        }
    }
    @media screen and ${device.betweentabletlaptop}{
    gap:12px;
    }
`
const PaddingWrapper = styled.div`
    padding: 5rem;
    @media ${device.laptop}{
        padding: 10rem;
        max-width:1568px;
        
    }
`
const NavLink = styled.a`
    text-decoration: none;
    text-align: center;
    padding: 14px 20px;
    ${fonts.paragraph};
    background-color: ${colors.primary};
    color: ${colors.bio};
    border: 3px solid ${colors.bio};
    border-radius: 10px;

    @media ${device.tablet} {
        white-space: nowrap;
    }
`
const Blurred = styled.div`
    position: sticky;
    height: 40vh;
    width: 100%;
    pointer-events: none;
    &.bottom {
        bottom: 0;
        background: linear-gradient(to top, ${colors.primary} 30vh, transparent);
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
                <PaddingWrapper>
                <TextContent>
                    <TextAndLink>
                        <p>{subheading.text.toUpperCase()}</p> 
                    </TextAndLink>
                    <TextAndLink>
                        <h1>{title.text}</h1>
                        <ArrowStyleOne 
                        width={340} 
                        color={colors.bio} 
                        strokeWidth={4} />
                        <NavLink href='#ingress'>
                            Hur ser siffrorna ut egentligen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body1.text}</p>
                        <ArrowStyleTwo 
                        width={280} 
                        color={colors.bio} 
                        strokeWidth={3} />
                        <NavLink href="#statistik">
                            Varför rapporteras de inte?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body2.text}</p>
                        <ArrowStyleThree 
                        width={320} 
                        color={colors.bio} 
                        strokeWidth={3} />
                        <NavLink href="#kolcykeln">
                            Men är inte biobränslen bra för naturen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body3.text}</p>
                        <ArrowStyleFour 
                        width={360} 
                        color={colors.bio} 
                        strokeWidth={2} />
                        <NavLink href="#skogen">
                            Men skogen växer väl upp igen och binder kolet?
                            </NavLink>
                    </TextAndLink>
                </TextContent>
                </PaddingWrapper>
                <Blurred className='bottom' />
            </ScrollContainer>
            <BurningForest />
            {/* <Image priority className='burning-forest' src={BurningForest} alt='burning forest graphic'/> */}
        </Container>
    )
}

export default Hero