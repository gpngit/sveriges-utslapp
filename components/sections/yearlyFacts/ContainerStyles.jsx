import styled,{css} from 'styled-components'
import { flex, device, colors, size, fonts } from '../../../styles/partials'

export const Grid = styled.div`
  max-width: 1500px;
  display: grid;
  gap: 2rem;
  
  @media screen and ${device.laptop}{
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
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
  ${fonts.paragraph};
  padding-bottom:1rem;

  @media ${device.tablet}{
  margin-top:-5rem;
  max-width:80vw;
    }
    @media ${device.laptop}{
      margin-top:2rem;
      max-width:90%;
    }
    
}
.footnote{
  ${fonts.footnote};
  margin-top:-5rem;
}
`
export const Row = styled.span`
  ${flex("row", "center", "flex-start")}
  gap:20px;
  padding-top:2rem;
  padding-bottom:1rem;
  width:100%;
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
  }
  @media ${device.laptop}{
    gap:10px;
    margin-bottom:2rem;
    padding: 1rem;
  }
  height:100px;
`

export const Heading = styled.span`
${flex("column", "flex-start", "flex-start")}
max-width:100%;

@media ${device.tablet}{
min-width:500px;
padding-right:1rem;
padding-left:2rem;
}

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