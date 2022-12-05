
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
@media ${device.tablet}{
    padding: 1rem;
}
`

export const Grid = styled.div`
display: grid;
gap: 1rem;
@media ${device.tablet}{
    gap:3rem;
    grid-template-columns: repeat(2, 1fr); }
`

export const TextContentGrid = styled.article`
@media ${device.betweentabletlaptop}{
    max-width:100%;
}
@media ${device.laptopL}{
    max-width:900px;
}
h2 {
    margin-bottom:1rem;
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
        
    }
}
p {
    ${fonts.paragraph};
    text-align: justify;
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
 
}
`

export const Subheading = styled.p`
text-transform:uppercase;
text-align: left;
max-width:70%;
`

export const ImageWrapper = styled.div`
display:block;

@media (max-width: ${size.tablet}){
    padding-top:1rem;
}
    .image{      
        display:block; 
        object-fit: contain;
        max-width: 100%;
        position: relative;
        height: unset;
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
                    text-align:justify;
                }
            }
        `}
    @media ${device.laptopL}{
        max-width:500px;
    }
    @media ${device.desktop}{
        max-width:600px;
    }
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
@media (max-width: ${size.tablet}){
    display:none;
}
padding-top:1rem;
`