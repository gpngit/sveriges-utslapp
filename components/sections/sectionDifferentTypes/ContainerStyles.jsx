
import styled,{css} from 'styled-components'
import { flex, device, size, colors, fonts } from '../../../styles/partials'

export const Container = styled.section`
${flex("column", "center", "center")};
gap: 40px;
color: black;
width:100%;
padding:5em;
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

${props => 
    props.first && 
    css`
        @media ${device.laptop}{
        padding-top:8em;
        }
        padding-top:2em;
        @media (max-width:${size.tablet}){  
            padding-top:5em;
        }
        @media (max-width: ${size.mobileL}){
            padding:1rem;
        }
    `}
`
export const Content = styled.div`
width:100%;
max-width:1568px;
padding:1rem;
`

export const Grid = styled.div`
display: grid;
gap: 1rem;
@media ${device.tablet}{
    gap:3rem;
    grid-template-columns: repeat(2, 1fr); }
`

export const TextContentGrid = styled.div`
@media ${device.betweentabletlaptop}{
    max-width:100%;
}
h2 {
    ${fonts.lessheading};
    max-width:100%;
    @media (max-width:${size.mobiletablet}){ 
        max-width:90%;
        margin-bottom:0.5rem;
    }
    @media ${device.mobileTablet}{
        max-width:80%;
    }
    @media ${device.betweentabletlaptop}{
        margin-bottom:1rem;
        min-width:300px;
        max-width:420px;
        width:100%;
    }
    @media ${device.laptop}{
        margin-bottom:1rem;
       
    }
}
p {
    ${fonts.paragraph};
    max-width:100%;
    text-align:left-justify;
    @media (max-width:${size.mobiletablet}){ 
        max-width:90%;
    }
    @media (max-width: ${size.mobileL}){
        max-width:100%;
    }
    @media ${device.betweentabletlaptop}{
    min-width:300px;
    max-width:400px;
    width:100%;
    }
}
`

export const Subheading = styled.p`
text-transform:uppercase;
text-align: left;
max-width:70%;
`

export const ImageWrapper = styled.div`
display:block;

    .image{      
        display:block; 
        object-fit: contain;
        max-width: 100%;
        position: relative;
        height: unset;
    }
    @media (max-width: ${size.mobiletablet}){
        width:100%;
        
    }
    @media (max-width: ${size.mobileL}){
    margin-top:2rem;
    }
    @media ${device.mobileL}{
    
        margin-top:1rem;
    }
    @media ${device.mobileTablet}{
        width:100%;
    }
    
    ${props => 
        props.imgbody && 
        css`
        @media (max-width:${size.mobiletablet}){ 
        }
        @media ${device.mobileTablet}{
            }
        `}

    ${props => 
            props.utslappimg && 
            css`
            @media (max-width:${size.mobiletablet}){ 
            margin-bottom:-5rem;
            margin-top:1rem;
            }
            @media (max-width: ${size.mobileL}){
            margin-bottom:-2rem;
            }
            @media ${device.mobileTablet}{
            position:relative;
            left:20%;
            margin-bottom:-4rem;
            width:70%;
            }
            @media ${device.betweentabletlaptop}{
            position:relative;
            left:0%;
            top:20%;
            width:100%;
            }
            @media ${device.laptop}{
            width:100%;
            left:0%;
            
            }
            `}
    padding-bottom:1rem;
    
`
export const ImageDescription= styled.p`
font-style: italic;
`

