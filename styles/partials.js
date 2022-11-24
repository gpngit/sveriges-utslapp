import styled, {css} from "styled-components";

// variables

export const colors = {
    primary: '#f2cebd',
    secondary: '#370000',
    bio: '#AB523A',
    fossil: '#876666',
    border: '#663531'
}
export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const device = {
    mobileS:`(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    betweentabletlaptop: ` (min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const fonts = {
    // heading: `font-size: clamp(3rem, 2vw + 1rem, 3.8rem); line-height: 120%;  
    // @media screen and ${device.desktop}{
    // line-height: 100%;}
    // `,
    // subheading: `font-size: clamp(1.5rem, 1vw + 1rem, 2rem); line-height:120%; @media screen and ${device.desktop}{
    //     line-height: 100%;} `,
    // paragraph: `font-size: clamp(1.125rem, 0.5vw + 1rem, 1.8rem); line-height:150%; @media screen and ${device.desktop}{
    //     line-height: 120%;}`,
    // footnote:"font-size: 1rem; line-height:150%; "
    heading: `
    font-size: 3.6em; 
    line-height:120%; 
    @media screen and ${device.desktop}{line-height: 100%;}`,
    subheading: `
    font-size: 2.2em; 
    line-height:120%; 
    @media screen and ${device.desktop}{line-height: 100%;} `,
    paragraph: `
    font-size: 1.6em; 
    line-height:150%; 
    @media screen and ${device.desktop}{line-height: 120%;}`,
    footnote: `
    font-size: 1.2em; 
    line-height:150%;
    @media screen and ${device.desktop}{line-height: 120%;}`
}
export const fontSizes = {
    heading: "clamp(3.1rem, 4vw + 1rem, 4rem)",
    subheading: "clamp(2.6rem, 2vw + 1rem, 3rem)",
    paragraph: "clamp(1.8rem, 1vw + 1rem, 2.2rem)",
    footnote: "1rem"
}

export const font ={
    main: "'Noto Sans', sans-serif"
}

// mixins

export const flex = (direction, justify, align) => css`
    display: flex;
    flex-direction: ${direction || 'column'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
`

