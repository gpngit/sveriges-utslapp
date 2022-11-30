
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
gap: 3rem;
@media ${device.tablet}{
    grid-template-columns: repeat(2, 1fr); }
`

export const TextContentGrid = styled.div`
h2 {
    ${fonts.lessheading};
    max-width:100%;
    @media (max-width:${size.mobiletablet}){ 
        max-width:90%;
        margin-bottom:0.5rem;
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
}

${props => 
    props.body && 
    css`
   
    `}
`

export const Text= styled.p`
margin-top:1rem;
margin-bottom:1rem;
`

export const Subheading = styled.p`
text-transform:uppercase;
text-align: left;
max-width:70%;
`

export const ImageWrapper = styled.div`
display:block;
width:80%;
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
    
     margin-bottom:-3rem;
     margin-top:2rem;
    }
    @media ${device.mobileL}{
        margin-bottom:-3rem;
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
            margin-top:-2rem;
            }
            @media (max-width: ${size.mobileL}){
            margin-bottom:-2rem;
            }
            @media ${device.mobileTablet}{
            margin-bottom:-10rem;
            }
            `}
    padding-bottom:1rem;
    
`
export const ImageDescription= styled.p`

`

