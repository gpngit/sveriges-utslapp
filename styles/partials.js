import styled, {css} from "styled-components";

// variables

export const colors = {
    primary: '#f2cebd',
    secondary: '#370000',
    primaryOpaque: '#fccebd99',
    secondaryOpaque: '#38000099',
    mainBackGround: '#D3D3D3',
    highlight: '#AB523A',
    hightlightOpaque: '#ab523a99'
}

export const fontSizes = {
    heading: '36px',
    subheading: '24px'
}


// mixins

export const flex = (direction, justify, align) => css`
    display: flex;
    flex-direction: ${direction || 'column'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
`