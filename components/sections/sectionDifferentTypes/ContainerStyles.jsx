
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

export const Container = styled.section`
${flex()};
gap: 40px;
padding:3rem;
color: black;

@media ${device.laptop}{
    width:80%;
    padding-right:10rem;
}
${props => 
    props.firstContainer && 
    css`
    background-color:white;
    position:relative;
    top:-100px;
    padding-top:10em;
    @media only screen and (${device.tablet}){
        top:0;
        padding:10em;
        padding-top:10em;
        }
    `}
    ${props => 
        props.secondContainer && 
        css`
        background-color:white;
        position:relative;
        top:-100px;
        padding-top:10em;
        @media only screen and (${device.tablet}){
            top:0;
            padding:10em;
            padding-top:10em;
            }
        `}

        ${props => 
            props.sections && 
            css`
            background-color:white;
            position:relative;
            top:-100px;
            padding-top:10em;
            @media only screen and (${device.tablet}){
                top:0;
                padding:10em;
                padding-top:10em;
                }
            `}
`

export const TextContent = styled.div`
${flex()};
h2 {
    ${fonts.heading};;
}
p {
    ${fonts.paragraph};
  
}
`
export const Text= styled.p`

margin-top:1rem;
margin-bottom:1rem;
`

export const Subheading = styled.p`
text-transform:uppercase;
max-width:70%;
`

export const ImageWrapper = styled.div`
display:block;
width:70%;

    .image{      
        display:block; 
        object-fit: contain;
        max-width: 100%;
        position: relative;
        height: unset;
    }
`
export const ImageDescription= styled.p`
${fonts.footnote};
font-style: italic;
`

export const Row = styled.div`
width:100%;
${flex()}
gap:20px;
@media only screen and (${device.tablet}){ 
${flex("row")};
}
`

export const Item = styled.div`
${flex("column")}
gap:10px;
.row{
    ${flex()}
}`