import styled,{css} from 'styled-components'
import { flex, device, colors, size, fonts } from '../../../styles/partials'

export const Grid = styled.div`
  max-width: 1500px;
  display: grid;
  gap: 2rem;
  
  @media screen and ${device.tablet}{
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`
export const FirstContent = styled.div`
    h2 {
        ${fonts.lessheading};
    }
    p {
        ${fonts.paragraph};
    }
`
export const SecondContent = styled.div`
p{
  padding-bottom:1rem;
}
`
export const Row = styled.span`
  ${flex("row", "center", "flex-start")}
  gap:20px;
  padding-bottom:1rem;
  width:100%;
  max-width:500px;
`
export const Heading = styled.span`
${flex("column", "flex-end")}
max-width:100%;
`

export const Content = styled.article`
  color: black;
  padding:3rem 1rem;

@media ${device.tablet}{
  padding: 5rem;
}
`