//CSS
import styled from 'styled-components'
import { flex, colors, font } from '../../styles/partials'
//nextjs components
import {
    FacebookShareCount,
    HatenaShareCount,
    OKShareCount,
    PinterestShareCount,
    TumblrShareCount,
    VKShareCount,
  } from 'next-share';
import Link from 'next/link'
//components
import Crumble from '../crumble/Crumble'


{/* <FacebookShareCount
url={'https://github.com/next-share'}
appId={''}
appSecret={''}
/> */}
{/* <FacebookShareCount
  url={'https://github.com/next-share'}
  appId={''}
  appSecret={''}
>
  {shareCount => <span className="wrapper">{shareCount}</span>}
</FacebookShareCount> */}

const Container = styled.footer`
    padding: 30px;
    background-color: ${colors.secondary};
    color: white;
    
    a {
        color: white;
    }
`
const Subheading = styled.h3`
    ${font.subheading};
`
const Title = styled.h2`
    ${font.title};
`
const LinksContainer = styled.div`
    ${flex()};    
`

const Footer = ({ pageElements }) => {

    const {sections} = pageElements

    const title = sections.find(section => section.name === 'title')
    const subheading = sections.find(section => section.name === 'subheading')
    const links = sections.find(section => section.name === 'links').links

    return (
        <Container>
            <div>
                <Subheading>{subheading.text.toUpperCase()}</Subheading>
                <Title>{title.text}</Title>
                <LinksContainer>
                    {links.map(link => 
                    <Link key={link.link}
                    href={link.link}>
                        {link.name}</Link>)}
                </LinksContainer>
            </div>
            <Crumble color={colors.primary} />
        </Container>
    )
}

export default Footer