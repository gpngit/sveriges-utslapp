import styled,{css} from 'styled-components'
import { flex, device, colors, size, fonts } from '../../../styles/partials'

export const Grid = styled.div`
  max-width: 1500px;
  display: grid;
  gap: 2rem;
  
  @media screen and ${device.laptop}{
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding-left:2rem;
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
  padding-top:100px;
  @media ${device.laptop}{
    margin-top:2rem;
    max-width:80%;
  }
  ${fonts.paragraph};
  padding-bottom:1rem;
  
}
`
export const Row = styled.span`
  ${flex("row", "center", "flex-start")}
  gap:20px;
  padding-top:2rem;
  padding-bottom:1rem;
  width:100%;
  max-width:500px;
  @media ${device.mobileL}{
    padding-left:2rem;
    gap:40px;
  }
  @media ${device.mobileTablet}{
  ${flex("row", "center", "center")}
  max-width:90%;
  padding-bottom:2rem;
  }
  @media ${device.tablet}{
    margin-bottom:1rem;
    ${flex("row", "center", "center")}
    padding:2rem 5rem;
  }
  @media ${device.laptop}{
    gap:10px;
    margin-bottom:2rem;
    padding: 1rem;
  }
  height:100px;
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
@media ${device.laptopL}{
  padding:5rem 10rem;
}


`