
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