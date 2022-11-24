
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

export const Content = styled.article`
gap: 40px;
color: black;
padding:3rem;
width:100%;
background-color:white;

@media ${device.laptop}{
  padding-right:10rem;
}

${props => 
  props.faktaOne && 
  css`
gap: 40px;
color: black;
position: relative;

  &::after{
    content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 35px solid transparent;
  border-bottom-color: white;
  border-top: 0;
  margin-left: -20px;
  margin-top: -30px;
  }
  `}
`

export const ButtonWrapper = styled.div`
padding:3rem;
padding-left:3rem;
`