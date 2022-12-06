import styled from "styled-components";
import { colors } from '../../styles/partials'

const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

div{
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${colors.secondary};
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
`
const Ellipse1 = styled.div`
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
`
const Ellipse2 = styled.div`
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
`
const Ellipse3 = styled.div`
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
`
const Ellipse4 = styled.div`
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
`


const LoadingSpinner = () => {
  return ( 
    <Spinner>
      <Ellipse1></Ellipse1>
      <Ellipse2></Ellipse2>
      <Ellipse3></Ellipse3>
      <Ellipse4></Ellipse4>
    </Spinner>
  );
}

export default LoadingSpinner;