import styled, {css} from "styled-components"

const SVG = styled.svg`
margin-top:-1rem;
`

export const Square = ({color, strokeWidth, fillColor, height, width}) => {
  return (
    <SVG viewBox ="0 0 58.73 58.43"
    fill={fillColor} 
    xmlns="http://www.w3.org/2000/svg" 
    stroke={color} 
    height={height}
    width={width}
    strokeWidth={strokeWidth} strokeLinecap = "pointy">
      <polygon points="2.13 29.37 29.83 2.12 56.6 29.28 29.1 56.32 2.13 29.37"></polygon>
    </SVG>
  )
}


// <?xml version="1.0" encoding="UTF-8"?><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.73 58.43"><defs><style>.cls-1{fill:#f2cebd;stroke:#370000;stroke-miterlimit:10;stroke-width:2px;}</style></defs><polygon class="cls-1" points="2.13 29.37 29.83 2.12 56.6 29.28 29.1 56.32 2.13 29.37"/></svg>