import { Link } from "react-router-dom";
import styled from "styled-components";



export default function Header() {
  return (
    <HeaderWrap>
      <h1>
        <Link>Pofolit</Link>
      </h1>
    </HeaderWrap>
  );
}


const HeaderWrap = styled.header`
  width: 100%;
  box-shadow: 0 4px 4px var(--sub-color);
  background-color: #FFF;
  padding: 16px 24px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  & h1 a {
    color: var(--main-color);
    font-size: 2rem;
    display:inline-block;
  }
`;