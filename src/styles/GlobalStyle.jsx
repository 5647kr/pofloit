import { createGlobalStyle } from "styled-components";
import "./font.css"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Noto Sans KR";
    font-size: 10px;
  }

  :root {
    --main-color: #37474F;
    --sub-color: #D3D3D3;
    --bg-color: #F9FAFB;
    --font-rw: 400;
    --font-bw: 700;
  }

  ul, ol, li {
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    display: block;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-weight: var(--font-rw);
  }

  main {
    margin-top: 61px;
    min-height: calc(100vh - 61px - 80px);
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

    @media screen and (max-width: 480px) {
    :root {
      --font-sz: 1.2rem;
      --font-smz: 1.4rem;
      --font-mz: 1.6rem;
      --font-lz: 1.8rem;
      --font-xlz: 2rem;
      --font-2xlz: 2.2rem;
    }
    section {
      padding: 0 16px;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    :root {
      --font-sz: 1.4rem;
      --font-smz: 1.6rem;
      --font-mz: 1.8rem;
      --font-lz: 2rem;
      --font-xlz: 2.2rem;
      --font-2xlz: 2.4rem;
    }
    section {
      padding: 0 32px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    :root {
      --font-sz: 1.6rem;
      --font-smz: 1.8rem;
      --font-mz: 2rem;
      --font-lz: 2.2rem;
      --font-xlz: 2.4rem;
      --font-2xlz: 2.6rem;
    }
    section {
      padding: 0 64px;
    }
  }

  @media screen and (min-width: 1025px) and (max-width: 1440px) {
    :root {
      --font-sz: 1.8rem;
      --font-smz: 2rem;
      --font-mz: 2.2rem;
      --font-lz: 2.4rem;
      --font-xlz: 2.6rem;
      --font-2xlz: 2.8rem;
    }
    section {
      padding: 0 128px;
    }
  }

  @media screen and (min-width: 1441px) {
    :root {
      --font-sz: 2rem;
      --font-smz: 2.2rem;
      --font-mz: 2.4rem;
      --font-lz: 2.6rem;
      --font-xlz: 2.8rem;
      --font-2xlz: 3rem;
    }
    section {
      padding: 0 256px;
    }
  }
`;

export default GlobalStyle;