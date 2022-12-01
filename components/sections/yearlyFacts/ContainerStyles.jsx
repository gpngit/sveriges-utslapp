import styled,{css} from 'styled-components'
import { flex, device, colors, size, fonts } from '../../../styles/partials'


export const Content = styled.article`
  color: black;
  padding:3rem 1rem;
  @media ${device.mobileTablet}{
  padding: 3rem;
  }

@media ${device.tablet}{
  padding: 5rem;
}
@media ${device.laptopL}{
  padding:5rem 10rem;
}
`
export const Row = styled.span`

${flex("column-reverse", "center", "center")}
gap:10px;
@media ${device.mobileL}{
  ${flex("row", "start", "center")}
  gap:10px;
}

`

export const Heading = styled.span`
padding-left:0.5rem;

h2{
  ${fonts.lessheading};
}
p{
  ${fonts.paragraph};
}
`


export const Grid = styled.div`
  max-width: 1500px;
  display: grid;
  gap: 2rem;
  
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
.footnote{
  ${fonts.footnote};

}
`
