//CSS
import styled from 'styled-components'
import { flex, colors, device, fonts } from '../../../styles/partials'
//nextjs components
import Image from 'next/image'
//resources
import BurningForest from '../../../public/burning-forest2.png'
import Arrow from '../../../public/arrow.svg'
//components
import Crumble from '../../../components/crumble/Crumble'
import { ArrowStyleOne, ArrowStyleTwo, ArrowStyleThree, ArrowStyleFour } from '../../SVG\'s/Arrows'

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
  
    ${flex('column')};
    gap: 10px;
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
  
`
const PaddingWrapper = styled.div`
padding:1rem;
@media ${device.laptop} {
padding-left:5rem;
padding-right:14rem;}
`
const NavLink = styled.a`
margin-top:1rem;
@media ${device.tablet} {
margin-top:0;
}
    text-decoration: none;
    text-align: center;
    padding: 14px 20px;
    ${fonts.paragraph};
    background-color: ${colors.primary};
   
    color: ${colors.bio};
    border: 3px solid ${colors.bio};
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
                <PaddingWrapper>
                <TextContent>
                    <TextAndLink>
                        <p>{subheading.text.toUpperCase()}</p>
                        {/* ingen länk här */}
                    </TextAndLink>
                    <TextAndLink>
                        <h1>{title.text}</h1>
                        <ArrowStyleOne width={340} color={colors.bio} strokeWidth={4} />
                        <NavLink href='#ingress'>Hur ser siffrorna ut egentligen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body1.text}</p>
                        <ArrowStyleTwo width={280} color={colors.bio} strokeWidth={3} />
                        <NavLink href="#faktaruta1">Varför rapporteras de inte?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body2.text}</p>
                        <ArrowStyleThree width={320} color={colors.bio} strokeWidth={3} />
                        <NavLink href="#faktaruta2">Men är inte biobränslen bra för naturen?</NavLink>
                    </TextAndLink>
                    <TextAndLink>
                        <p>{body3.text}</p>
                        <ArrowStyleFour width={360} color={colors.bio} strokeWidth={2} />
                        <NavLink href="#kolcykeln">Men skogen växer väl upp igen och binder kolet?</NavLink>
                    </TextAndLink>
                </TextContent>
                </PaddingWrapper>
                <Blurred className='bottom' />
            </ScrollContainer>
            <Image priority className='burning-forest' src={BurningForest} alt='burning forest graphic'/>
        </Container>
    )
}

export default Hero