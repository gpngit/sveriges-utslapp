import styled,{css} from 'styled-components'
import { flex, device, colors, size, fonts } from '../../../styles/partials'


export const Content = styled.article`
color: black;
padding:3rem 1rem;
@media ${device.mobileTablet}{
  padding: 2rem;
}
@media ${device.tablet}{
  padding: 5rem;
}
@media ${device.laptop}{
  padding-top:4rem;
  padding-bottom:1rem;
}
@media ${device.laptopL}{
  padding:5rem 10rem;
}
${props => 
  props.biobransle && 
  css`
  padding:3rem 1rem;

  @media (max-width: ${size.tablet}){
    margin-top:-3rem;
    padding: 1rem;
    padding-bottom:3rem;
  }
  
  @media ${device.tablet}{
    padding: 5rem;
  }

  @media ${device.laptop}{
    padding-top:4rem;
    padding-bottom:1rem;
  }
  @media ${device.laptopL}{
    padding:5rem 10rem;
  }
  `}
`
export const Row = styled.span`
padding-bottom:1rem;
${flex("column", "flex-start", "flex-start")}
gap:10px;

span:first-of-type {  
  padding-left:0;
  margin-left:0.2rem;
  @media (max-width: 350px){
    position:relative;
    left:40%;
    margin-bottom:0.5rem;}
}

@media ${device.mobileS}{
  ${flex("row", "start", "center")}
  gap:12px;
  margin-left:0.2rem;
  padding:1rem;
  span:first-of-type{
    margin-left:-1rem;
  }
}
@media ${device.mobileL}{
  span:first-of-type{
    margin-left:1rem;
  }
}
${props => 
  props.biobransle && 
  css`
  span:first-of-type {  
    padding-left:0;
    margin-left:0.2rem;
  }
  `}
`

export const Heading = styled.span`
  padding-left:1rem;
h2{
  color: ${colors.secondary};
  ${fonts.lessheading};
}
p{
  ${fonts.paragraph};
}
`
export const Paragraph = styled.p`
@media ${device.laptop}{
  padding-right:2rem;
}
`
export const Grid = styled.div`
  max-width: 1500px;
  display: grid;
  @media screen and ${device.laptop}{
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`
export const FirstContent = styled.div`
  p {
      ${fonts.footnote};
  }
@media ${device.mobileL}{
  padding:1rem;
}
    
${props => 
  props.biobransle && 
  css`
  p{
      ${fonts.paragraph}
      text-align: left;
      text-justify: inter-word; 
      padding: 1rem;
      margin-top:-1rem;
      @media ${device.mobileS}{
      padding:0;
      padding-top:1rem;
      }
      @media ${device.tablet}{
        max-width:90%;
        padding-left:3rem;
      }
      @media (max-width: ${size.tablet}){
        padding-bottom:1rem; 
      }
    }

    @media ${device.laptop}{
      div{
        padding-left:3rem;
      }
      p{
        padding-bottom:1rem;
      }
    }
  `}
`
export const SecondContent = styled.div`
@media ${device.mobileL}{
  padding:1rem;
}
p{
  padding-bottom:1rem;
  ${fonts.paragraph};
  text-align: left;
  text-justify: inter-word;
}

.footnote{
  padding-top:1rem;
  ${fonts.footnote};
  @media (min-width: 900px) and (max-width: ${size.laptop}){
    padding-right:3rem;
  }
  @media ${device.laptop}{
    padding-right:2rem;
    font-style:italic;
  }
  a{
    color:${colors.secondary};
  }
}

${props => 
  props.biobransle && 
  css`
  @media ${device.laptop}{
    max-width:500px;
  }
  `}
`
export const RowMobile = styled.span`
width:100%;
@media (min-width: ${size.tablet}) and (max-width: ${size.laptop}){
  ${flex("row", "center", "center")}
  gap:1rem;
}
`

export const MobileButtons = styled.span`
${flex("column", "center", "center")}
align-self:center;
padding-top:1rem;
@media ${device.laptop}{
  display:none;
}
`
export const DesktopButtons = styled.span`
@media (max-width: ${size.laptop}){
  display:none;
}
`