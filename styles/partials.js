import styled, {css} from "styled-components";

// variables

export const colors = {
    primaryLight: '#f2cebd',
    primaryDarK: '#540707'
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