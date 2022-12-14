
import styled,{css} from 'styled-components'
import { flex, device, size, colors, fonts } from '../../../styles/partials'

export const Container = styled.section`
    ${flex("column", "center", "center")};
    gap: 40px;
    width:100%;
    padding:5em;

    @media (max-width: ${size.mobileS}){
        padding:1rem;
        margin: 0 auto;
        width:100%;
    }
    @media (max-width:${size.mobiletablet}){ 
        padding:2em;  
    }
    @media (max-width: ${size.mobileL}){
        padding:1rem;
    }
    @media ${device.mobileTablet}{
        padding:2rem;
    }
    @media ${device.betweentabletlaptop}{
        padding:3rem;
    }
    @media ${device.laptop}{
        padding:10rem;
        padding-bottom:3rem;
    }
`
export const Content = styled.div`
    width:100%;
    max-width:1568px;
    padding-top:2rem;
    @media ${device.tablet}{
        padding: 1rem;
    }
`

export const Grid = styled.div`
    display: grid;
    gap: 1rem;
    @media ${device.tablet}{
        gap:3rem;
        grid-template-columns: repeat(2, 1fr); 
    }
`

export const TextContentGrid = styled.article`
    @media ${device.betweentabletlaptop}{
        max-width:100%;
    }
    @media ${device.laptopL}{
        max-width:900px;
    }

    h2 {
        padding-bottom:1rem;
        margin-top:0.2rem;
        ${fonts.lessheading};
        max-width:90%;
        color: ${colors.secondary};

        @media (max-width:${size.mobiletablet}){ 
            max-width:90%;
        }
        @media ${device.betweentabletlaptop}{
            min-width:300px;
            max-width:420px;
            width:100%;
        }
        @media ${device.laptop}{
            max-width:400px;
            width:100%;
        }
        @media (max-width: ${size.mobileS}){
            width:100%;
        }
}
p {
    ${fonts.paragraph};
    text-align: left;
    text-justify: inter-word; 
    @media (max-width: ${size.mobileL}){
        max-width:100%;
    }
    @media ${device.mobileTablet}{
        max-width:90%;
    }
    @media ${device.betweentabletlaptop}{
        min-width:300px;
        max-width:400px;
        width:100%;
    }
    @media (max-width: ${size.mobileS}){
        padding-right:1rem;
        width:100%;
    }
}
`

export const Subheading = styled.p`
    text-transform:uppercase;
    text-align: left;
    color: ${colors.border};
    @media (max-width: ${size.mobileS}){
    ${fonts.footnote};
    }
`

export const ImageWrapper = styled.div`
    display:block;

    @media (max-width: ${size.tablet}){
        padding-top:1rem;
        width:70%;
    }
    @media (max-width: ${size.mobiletablet}){
        width:80%;
    }
    @media (max-width: ${size.mobileL}){
        width:100%;
    }
    .image{      
        display:block; 
        object-fit: contain;
        max-width: 100%;
        position: relative;
        height: unset;
    }
    @media ${device.laptopL}{
        max-width:500px;
    }
    @media ${device.desktop}{
        max-width:600px;
    }
    

    ${props => 
        props.first && 
        css`
        @media (min-width:${size.mobiletablet} and max-width:700px){
            width:90%;
        }
        @media (max-width:${size.tablet}){  
            padding-top:1em;
            p{
                text-align:left;
            }
        }
        `}
`
export const ImageDescription= styled.p`
    padding-top:0.5rem;
    font-style: italic;
`
export const Mobile = styled.div`
    @media ${device.tablet}{
        display:none;
    }
`

export const Desktop = styled.div`
    padding-top:1rem;
    @media (max-width: ${size.tablet}){
        display:none;
    } 
`