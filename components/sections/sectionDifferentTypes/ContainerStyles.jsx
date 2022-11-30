
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

${props => 
    props.first && 
    css`
    @media ${device.laptop}{
    padding-top:10em;
    }
    padding-top:2em;
    
    @media (max-width:${size.mobiletablet}){  
        padding-top:5em;
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
@media ${device.laptop}{
    grid-template-columns: repeat(2, 1fr); }
`

export const TextContentGrid = styled.div`
h2 {
    ${fonts.lessheading};
    max-width:100%;
    margin-bottom:1rem;
    margin-top:0.3rem;
    @media (max-width:${size.mobiletablet}){ 
        max-width:90%;
    }
}
p {
    ${fonts.paragraph};
    max-width:100%;
    text-align:left-justify;
    @media (max-width:${size.mobiletablet}){ 
        max-width:90%;
    }
}
${props => 
    props.body && 
    css`
    @media (max-width:${size.mobiletablet}){ 
    margin-top:-3rem;
    }
    `}s
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
        margin-top:-2rem;
    }
    @media (max-width: ${size.mobileL}){
        margin-top:1rem;
    }
    ${props => 
        props.imgbody && 
        css`
        @media (max-width:${size.mobiletablet}){ 
        margin-top:-5rem;
        }
        `}
        ${props => 
            props.utslappimg && 
            css`
            @media (max-width:${size.mobiletablet}){ 
            margin-bottom:-5rem;
            }
            `}
    padding-bottom:2rem;
    
`
export const ImageDescription= styled.p`

`

export const Sources = styled.div`
h3{
    ${fonts.subheading};
    margin-bottom:1rem;
}
p{
    ${fonts.paragraph}
}
`


