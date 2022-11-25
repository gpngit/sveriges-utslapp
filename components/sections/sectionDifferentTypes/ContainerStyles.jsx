
import styled,{css} from 'styled-components'
import { flex, device, size, colors, fonts } from '../../../styles/partials'



export const Container = styled.section`
${flex()};
gap: 40px;
color: black;
max-width:1500px;
width:100%;
padding:10em;
@media ${device.laptop}{
    padding-right:15rem;
}
`


export const Grid = styled.div`
max-width: 1500px;

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
}
p {
    ${fonts.paragraph};
    max-width:100%;
    text-align:left-justify;
}
${props => 
    props.body && 
    css`
    position:relative;
    @media ${device.laptop}{
        top:-50px; 
    }
    top:-9rem;
    `}
`

export const Text= styled.p`
margin-top:1rem;
margin-bottom:1rem;
`

export const TextContent = styled.div`
max-width:900px;
width:50%;
${flex()};

h2 {
    ${fonts.heading};
    max-width:90%;
    margin-bottom:1rem;
    @media (max-width: ${size.tablet}){
        max-width:100%;
    }
}
p {
    ${fonts.paragraph};
    max-width:90%;
    text-align:left;
    @media (max-width: ${size.tablet}){
        max-width:90%;
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
width:70%;
padding-top:2rem;

    .image{      
        display:block; 
        object-fit: contain;
        max-width: 100%;
        position: relative;
        height: unset;
    }
    @media (max-width: ${size.mobileL}){
        width:90%;
    }
`
export const ImageDescription= styled.p`
${fonts.footnote};
font-style: italic;
margin-bottom:2rem;
`

export const Sources = styled.div`
h3{
    ${fonts.subheading};
    margin-bottom:1rem;
}
p{${fonts.paragraph}
}`


