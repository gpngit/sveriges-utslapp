//CSS
import styled, {css} from "styled-components";

const SVG = styled.svg`
    padding: 0px 40px;
`
export const ArrowStyleOne = ({ color, width, strokeWidth }) => {
    return (
        <SVG 
        width={width} 
        viewBox="0 0 219 62" 
        fill='none' 
        role="img"
        alt="Pil"
        xmlns="http://www.w3.org/2000/svg">
            <title>Pil</title>
            <desc>En pil som pekar på något viktigt</desc>
            <path 
            d="M217 39.9996C217 39.9996 183 24.1051 124 19.0001C65 13.8952 24.5 30.9996 24.5 30.9996" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
            <path d="M34.6458 1.96454C34.6458 1.96454 3.28018 29.9806 7.13982 38.2402C10.9995 46.4999 47.288 52.4043 47.288 52.4043" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
        </SVG>
    )
}

export const ArrowStyleTwo = ({ color, width, strokeWidth }) => {
    return (
        <SVG 
        role="img"
        alt="Pil"
        width={width} 
        viewBox="0 0 263 58" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
            <title>Pil</title>
            <desc>En pil som pekar på något viktigt</desc>
            <path 
            d="M261.5 31.9369C261.5 31.9369 185.5 50.5 115 44.9998C44.5 39.4995 26.5 28.9369 26.5 28.9369" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
            <path 
            d="M33.4197 56.0758C33.4197 56.0758 5.26246 27.4107 9.97503 20.5181C14.6876 13.6254 51.348 12.6845 51.348 12.6845" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
        </SVG>
    )
}

export const ArrowStyleThree = ({ color, width, strokeWidth }) => {
    return (
        <SVG 
        role="img"
        alt="Pil"
        width={width} 
        viewBox="0 0 256 53" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
        <title>Pil</title>
            <desc>En pil som pekar på något viktigt</desc>
            <path 
            d="M254.499 28.9373C254.499 28.9373 197.999 18.5002 129.499 18.5002C60.999 18.5002 19.499 25.9373 19.499 25.9373" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
            <path 
            d="M38.7856 48.8647C38.7856 48.8647 0.881546 35.5307 2.07673 27.267C3.27192 19.0033 35.7709 2.0124 35.7709 2.0124" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
        </SVG>
    )
}

export const ArrowStyleFour = ({ color, width, strokeWidth }) => {
    return (
        <SVG 
        width={width} 
        viewBox="0 0 202 55" 
        fill="none"
        role="img"
        alt="Pil"
        xmlns="http://www.w3.org/2000/svg">
        <title>Pil</title>
            <desc>En pil som pekar på något viktigt</desc>
            <path d="M200.001 25.9373C200.001 25.9373 161.5 41 112 41C62.5005 41 22.5 25.9373 22.5 25.9373" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
            <path d="M35.0855 52.7793C35.0855 52.7793 3.30597 28.1912 7.04176 20.7238C10.7776 13.2565 46.9729 7.35997 46.9729 7.35997" 
            stroke={color} 
            strokeWidth={strokeWidth} 
            strokeLinecap="round"/>
        </SVG>
    )
}

export const SmallArrow = ({ color, size }) => {
    return (
        <svg 
        height={size} 
        viewBox="0 0 33 15" 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        alt="Pil">
            <title>Pil</title>
            <desc>En pil som pekar på något viktigt</desc>
            <path 
            fill={color}
            d="M28.1839 14.3532C28.3792 14.5485 28.6958 14.5485 28.891 14.3532L32.073 11.1712C32.2683 10.9759 32.2683 10.6594 32.073 10.4641C31.8777 10.2688 31.5612 10.2688 31.3659 10.4641L28.5375 13.2925L25.709 10.4641C25.5138 10.2688 25.1972 10.2688 25.0019 10.4641C24.8067 10.6594 24.8067 10.9759 25.0019 11.1712L28.1839 14.3532ZM0.5 2.85673C0.645678 3.33504 0.645614 3.33506 0.645597 3.33506C0.645651 3.33505 0.645679 3.33504 0.645788 3.33501C0.646006 3.33494 0.646405 3.33482 0.646985 3.33464C0.648144 3.33429 0.650023 3.33373 0.652616 3.33295C0.657802 3.33139 0.665841 3.32898 0.676671 3.32577C0.698332 3.31935 0.731159 3.30971 0.774668 3.29718C0.86169 3.27212 0.991419 3.23552 1.15998 3.19003C1.49716 3.09904 1.98947 2.97256 2.60599 2.83184C3.83963 2.55026 5.56744 2.21237 7.54258 1.98722C11.5113 1.53482 16.4004 1.54729 20.2936 3.31205L20.7064 2.40126C16.5622 0.522681 11.4513 0.535184 7.42932 0.993657C5.40914 1.22394 3.64398 1.5692 2.38347 1.85691C1.75292 2.00083 1.24787 2.13054 0.899442 2.22456C0.725209 2.27158 0.590081 2.3097 0.497946 2.33623C0.451876 2.3495 0.41655 2.35987 0.392452 2.36701C0.380403 2.37058 0.371161 2.37335 0.364786 2.37526C0.361598 2.37622 0.359127 2.37697 0.357381 2.3775C0.356508 2.37776 0.355816 2.37797 0.355306 2.37813C0.355051 2.3782 0.354805 2.37828 0.354677 2.37832C0.354477 2.37838 0.354322 2.37842 0.5 2.85673ZM20.2936 3.31205C24.182 5.07465 26.1103 7.75794 27.0736 9.99235C27.5569 11.1133 27.7982 12.1242 27.9186 12.8524C27.9787 13.2162 28.0084 13.5084 28.0231 13.7072C28.0305 13.8065 28.0341 13.8824 28.0358 13.9321C28.0367 13.9569 28.0371 13.9752 28.0373 13.9866C28.0374 13.9923 28.0374 13.9962 28.0375 13.9984C28.0375 13.9995 28.0375 14.0002 28.0375 14.0004C28.0375 14.0005 28.0375 14.0005 28.0375 14.0003C28.0375 14.0003 28.0375 14.0001 28.0375 14.0001C28.0375 13.9999 28.0375 13.9996 28.5375 13.9996C29.0375 13.9996 29.0375 13.9993 29.0375 13.999C29.0375 13.9989 29.0375 13.9985 29.0375 13.9982C29.0375 13.9977 29.0375 13.997 29.0375 13.9962C29.0375 13.9945 29.0374 13.9925 29.0374 13.9899C29.0374 13.9849 29.0373 13.978 29.0371 13.9694C29.0369 13.9522 29.0363 13.9279 29.0352 13.897C29.033 13.835 29.0288 13.7462 29.0204 13.6334C29.0037 13.4078 28.9707 13.0856 28.9052 12.6894C28.7743 11.8975 28.5133 10.8058 27.9919 9.59645C26.9459 7.1702 24.8555 4.282 20.7064 2.40126L20.2936 3.31205Z" 
            />
        </svg>
    )
}





