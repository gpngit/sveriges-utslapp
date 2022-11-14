import styled, {css} from "styled-components";

// variables

export const AxisThickness = '80px'
export const LineChartWidth = '2000px'

export const colors = {
    primary: '#f2cebd',
    secondary: '#370000',
    bio: '#AB523A',
    fossil: '#876666',
    border: '#663531'

}

export const fontSizes = {
    heading: '3.8em',
    subheading: '2.4em',
    paragraph: '1.6em'
}


// mixins

export const flex = (direction, justify, align) => css`
    display: flex;
    flex-direction: ${direction || 'column'};
    justify-content: ${justify || 'flex-start'};
    align-items: ${align || 'flex-start'};
`