
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

export const Container = styled.section`
${flex()};
gap: 40px;
background-color: white;
padding: 5rem;
color: black;
`

export const TextContent = styled.div`
${flex()};
gap: 20px;
max-width: 600px;

h2 {
    ${fonts.heading};;
}

p {
    ${fonts.paragraph};
}
`

export const ImageWrapper = styled.div`
width:100%;
    .image{       
        object-fit: contain;
        width: 100%;
        position: relative;
        height: unset;
    }
    ${props => 
        props.portrait && 
        css`
        width:100%;
        .image{  
        width: unset;
        object-fit: contain;
        height: 100%;
        position: relative;
        }
        `}
`

export const Row = styled.div`

@media only screen and (${device.tablet}){
${flex}
gap:5rem;
}
`

export const Item = styled.div`
${flex("column")}
gap:10px;
padding:1rem;`