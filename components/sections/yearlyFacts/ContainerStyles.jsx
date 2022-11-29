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
gap: 20px;
width:100%;
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
  margin-bottom:2rem;
  padding-right:4rem;
}
@media screen and ${device.laptopL}{
  p{ ${fonts.footnote};
}}

${props => 
  props.kollagertxt && 
  css`
  margin-top:-5rem;
  max-width:800px;  
  @media screen and ${device.laptopL}{
    padding-left:3rem;
    position: relative;
    top:40%;}
  `}

  ${props => 
    props.biobransle && css`
    margin-top:-5rem;
    max-width:800px;  
    @media screen and ${device.laptopL}{
      padding-left:3rem;
      position: relative;
      top:30%;}
    `}
`
export const Row = styled.span`
${flex("row")}
gap:20px;`

export const Content = styled.article`
color: black;
padding:3rem;
`

// export const ButtonWrapper = styled.div`
// padding:3rem;
// padding-left:3rem;
// `