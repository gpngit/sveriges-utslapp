//CSS
import styled from 'styled-components'
import { flex, colors, fonts,} from '../../styles/partials'
//nextjs components
import Link from 'next/link'
//components
import Crumble from '../crumble/Crumble'

const Container = styled.footer`
    padding: 3rem;
    background-color: ${colors.secondary};
    color: white;
    a {
        ${fonts.paragraph};
        line-height:175%;
        color: ${colors.primary};
        &:hover{
            color: white;
        }
    }
`
const Subheading = styled.h3`
    ${fonts.paragraph};
`
const Title = styled.h2`
    ${fonts.lessheading};
`
const LinksContainer = styled.div`
    ${flex()}; 
    padding-bottom:4rem;
    padding-top:1rem;
`

const Footer = ({ pageElements }) => {

    const {sections} = pageElements
    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const links = pageElements.sections.filter(item => item.name === "links");
  
    return (
        <Container>
            <div>
                <Subheading>{subheading.text.toUpperCase()}</Subheading>
                <Title>{title.text}</Title>
                <LinksContainer>
                    {links.map((link,indx) => 
                 
                    <Link key={indx}
                    target="_blank"
                    href={link.url}>
                    {link.text}</Link>)} 
                </LinksContainer>
            </div>
            <Crumble color={colors.primary} />
        </Container>
    )
}

export default Footer