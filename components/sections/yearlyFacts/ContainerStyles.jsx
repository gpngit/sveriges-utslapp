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
padding-bottom:1rem;
${flex("column", "flex-start", "flex-start")}
gap:10px;

@media ${device.mobileM}{
  ${flex("row", "start", "center")}
  gap:10px;
  padding:1rem;
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
    p {
        ${fonts.footnote};
    }
@media ${device.mobileL}{
  padding:1rem;
    }
`
export const SecondContent = styled.div`
@media ${device.mobileL}{
  padding:1rem;
}
p{
  padding-bottom:1rem;
  ${fonts.paragraph};

}
.footnote{
  padding-top:1rem;
  ${fonts.footnote};
  @media (min-width: 900px) and (max-width: ${size.laptop}){
    padding-right:3rem;
  }
}
`
export const RowMobile = styled.span`
width:100%;
@media (min-width: ${size.tablet}) and (max-width: ${size.laptop}){
  ${flex("row", "center", "center")}
  gap:1rem;
}
`