import { flex, device, fonts, colors, size } from "../../styles/partials";
import styled, {css} from "styled-components";
import { useState } from "react";
import Link from "next/link";

const Content = styled.div`
  ${flex()}
  gap: 1rem;
  ${fonts.footnote};
  h3{
    padding-top:2rem;
  }
  ul {
    padding:1rem;
    ${flex("column")};
    gap:10px;
  }
  a{
    color: ${colors.secondary};
    &:hover{
      color: ${colors.bio};
    }
  }
`

const LinkModal = ({sourceLink1, sourceLink2, sourceLink3}) => {

  return ( 
  <Content>
        <h3>Källhänvisningar:</h3>
        <ul>
          <Link href={sourceLink1} target="_blank">
          Konsumtion av skogsprodukter
          </Link>
          <Link href={sourceLink2} target="_blank">
          Abrupt increase in harvested forest area over Europe after 2015
          </Link>
          <Link href= {sourceLink3} target ="_blank">
           EU-kritik mot svenskt skogsbruk
          </Link>
        </ul>
    </Content>
 
  );
}
export default LinkModal;

