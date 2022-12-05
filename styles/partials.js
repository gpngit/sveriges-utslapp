import styled, {css} from "styled-components";

// variables

export const colors = {
    primary: '#f2cebd',
    secondary: '#370000',
    bio: '#AB523A',
    fossil: '#876666',
    border: '#663531',
    green: '#3d873d',
    greenOpaque: '#3d873db3',
    white: "#f8f6f6",
    
}
export const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    mobiletablet: '600px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2100px'
}
export const device = {
    mobileS:`(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    mobileTablet: `(min-width: ${size.mobiletablet})`,
    tablet: `(min-width: ${size.tablet})`,
    betweentabletlaptop: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
export const fonts = {
    heading: `font-size: clamp(1.6rem, 2vw + 1rem, 3rem); line-height: 120%;  
    @media screen and ${device.desktop}{
    line-height: 100%;}
    `,
    subheading: `font-size: clamp(0.8rem, 1vw + 1rem, 1.6rem); line-height:120%; `,
    paragraph:`font-size: clamp(1rem, 1vw , 1.2rem); 
    line-height: 150%; `,
    footnote:`font-size: 0.8rem; line-height:150%;
    @media screen and ${device.laptopL}{
        font-size:1rem;}`,
    button: `font-size: 1rem;
    `,
    lessheading: `
    font-size:clamp(1.7rem, 1vw + 1rem, 4.2rem);
    line-height: 120%;
    `,

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

