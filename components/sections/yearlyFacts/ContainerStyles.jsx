import styled,{css} from 'styled-components'
import { flex, device, colors, size, fonts } from '../../../styles/partials'

export const Grid = styled.div`
  max-width: 1500px;
  display: grid;
  gap: 3rem;

  @media screen and ${device.laptop}{
    grid-template-columns: repeat(2, 1fr);
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
    ${fonts.paragraph};
  }
  
`
export const Row = styled.span`
  ${flex("row")}
  gap:20px;
`

export const Content = styled.article`
  color: black;
  padding:5rem 1rem;

@media ${device.tablet}{
  padding: 5rem;
}
`