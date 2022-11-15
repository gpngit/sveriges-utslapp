
import styled,{css} from 'styled-components'
import { flex, device, colors, fonts } from '../../../styles/partials'

export const ContentWithArrow = styled.div`
${flex()};
width:70%
gap: 40px;
background-color:white;
color: black;
position: relative;
padding:2rem;

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
`