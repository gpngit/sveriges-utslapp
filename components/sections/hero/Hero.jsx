//CSS
import styled from 'styled-components'
import { flex, colors, device, fonts, size } from '../../../styles/partials'
//resources
import BurningForest from '../../SVG\'s/BurningForest'
//components
import Crumble from '../../../components/crumble/Crumble'
import { ArrowStyleOne, ArrowStyleTwo, ArrowStyleThree, ArrowStyleFour } from '../../SVG\'s/Arrows'

const RedBg = styled.div`
    width:100%;
    z-index:40;
    position:absolute;
    height:10px;
    margin-top:-4px;
    background-color: ${colors.secondary};
`
const Container = styled.header`
    background-color: ${colors.primary};
    color: ${colors.secondary};
    
    .burning-forest {
        margin-top: -100vh;
        min-height: 100vh;
        position: sticky;
        overflow: hidden;
        bottom: 0;
        pointer-events: none;
        display:block;

        svg {
            position: absolute;
            bottom: 0px;
            width: 100%;
        }

        svg.embers{
            display:none;
            animation: embers 7s infinite ease-in;
            opacity: 0;
            z-index:0;

            @media ${device.tablet}{
                display: block;
            }
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
            display:none;
            animation: smoke 12s infinite ease-in;
            opacity: 0;

            @media ${device.tablet}{
                display: block;
            }
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
const InnerContainer = styled.div`
    padding: 2rem;
    width: 100%;
    ${flex('column', 'center', 'center')};

    @media ${device.tablet}{
        padding: 2rem 6rem;
    }

    @media ${device.laptop}{
        padding: 2rem 10rem;
    }
    display:block;
`
const TextContent = styled.nav`
    max-width: 1200px;
    ${flex('column')};
    gap: clamp(2rem, 5vw, 10rem);
    
    h1 {
        ${fonts.heading};
        text-align: justified;
        width:90%;
        padding-bottom:1rem;

        @media ${device.tablet}{
            width:100%;
            padding:0;
            margin-right:-1rem;s
        }
        @media ${device.laptop}{
            
            margin-right:-2rem;
        }
        @media ${device.laptopL}{
            margin-top:-1rem;
            margin-bottom:-2rem;
        }
    }
    p {
        ${fonts.subheading};
        @media (max-width:${size.tablet}){
            padding-bottom:0.3rem;
        }
        @media (max-width:${size.mobileM}){
            padding-bottom:0;
        }
    }
    .arrowfour{
        svg{
            margin-top:3rem;
            @media (min-width:1200px){
                margin-top:2rem;
            }
            @media ${device.laptopL}{
                margin-top:1rem;
            }
        }
`
const TextAndLink = styled.div`
    ${flex('column')};
    gap:20px;
    svg {
        display: none;
    }
    @media ${device.mobileL}{
        gap:6px;
    }
    @media ${device.tablet} {
        ${flex('row', 'flex-start', 'flex-start')};
        svg{
            display:block;
            margin-top:1rem;
        }
    }
    .subheading{
        width:100%;
        margin-bottom:-2rem;
        @media ${device.laptop}{
            padding-top:1rem;
        }
    }
    .ingressref{
        @media ${device.laptop}{
            margin-top:2rem;
        }
    }
    .statistikref{
        @media ${device.tablet}{
            margin-top:-2rem;
        }
        @media ${device.laptop}{
            margin-top:-1rem;
        }
    }
    .body{
        max-width:70%;
        @media (max-width:${size.mobileL}){
            max-width:100%;
        }
    }
`

const NavLink = styled.a`
    text-decoration: none;
    text-align: center;
    padding: .6rem 1.4rem;
    ${fonts.paragraph};
    background-color: ${colors.primary};
    color: ${colors.border};
    border: 3px solid ${colors.border};
    border-radius: 10px;
`
const Blurred = styled.div`
    position: sticky;
    height: 40vh;
    background: linear-gradient(to top, ${colors.primary} 20vh, transparent);
    width: 100%;
    pointer-events: none;
    bottom: 0;

    @media ${device.tablet}{
        height: 60vh;
        background: linear-gradient(to top, ${colors.primary} 40vh, transparent);
    }
`

const Hero = ({ pageElements }) => {
    const { sections } = pageElements
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const body1 = sections.find(section => section.name === 'body1')
    const body2 = sections.find(section => section.name === 'body2')
    const body3 = sections.find(section => section.name === 'body3')

    return (
    <Container>
        <Crumble 
        color={colors.secondary}/>
        <InnerContainer>
            <TextContent>
                <TextAndLink>
                    <p className="subheading">{subheading.text.toUpperCase()}</p> 
                </TextAndLink>
                <TextAndLink>
                    <h1>{title.text}</h1>
                    <ArrowStyleOne 
                    width={340} 
                    role="img"
                    color={colors.border} 
                    strokeWidth={3}
                    alt='En pil som pekar till föregående text' />
                    <NavLink 
                    className="ingressref" 
                    href='#ingress'>
                        <strong>
                        Hur ser siffrorna ut egentligen?
                        </strong>
                    </NavLink>
                </TextAndLink>
                <TextAndLink>
                    <p className="body">{body1.text}</p>
                    <ArrowStyleThree
                    width={280} 
                    role="img"
                    color={colors.border} 
                    strokeWidth={3} 
                    alt='En pil som pekar till föregående text' />
                    <NavLink 
                    className="statistikref" 
                    href="#statistik">
                        <strong>
                            Varför rapporteras de inte?
                            </strong>
                    </NavLink>
                </TextAndLink>
                <TextAndLink>
                    <p 
                    className="body">
                        {body2.text}</p>
                    <ArrowStyleThree 
                    role="img"
                    width={320} 
                    color={colors.border} 
                    strokeWidth={3} 
                    alt='En pil som pekar till föregående text'/>
                    <NavLink href="#biobränsle">
                        <strong>
                        Är inte biobränslen bra för naturen?
                        </strong>
                    </NavLink>
                </TextAndLink>
                <TextAndLink 
                className="arrowfour">
                    <p className="body">
                        {body3.text}</p>
                    <ArrowStyleFour 
                    role="img"
                    width={360} 
                    color={colors.border} 
                    strokeWidth={2} 
                    alt='En pil som pekar till föregående text'/>
                    <NavLink href="#skogen"
                    className="skogenref">
                        <strong>
                        Skogen växer väl upp igen och binder kolet?
                        </strong>
                    </NavLink>
                </TextAndLink>
            </TextContent>
        </InnerContainer>
        <Blurred className='bottom'/>
        <BurningForest 
        alt="Skogen brinner"
        role="img"/>
        <RedBg/>
    </Container>
    )
}

export default Hero