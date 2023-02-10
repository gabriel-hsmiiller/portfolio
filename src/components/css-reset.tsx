import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #2A2A2A;
    }
    &::-webkit-scrollbar-thumb {
      background: #4F4F4F;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #707070;
    }
  }
  body {
    font-family: 'Noto Serif', serif;
    font-weight: 400;
    background-color: #2A2A2A;
    color: #F0F0F0;
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  #__next {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    &:hover {
      opacity: .9;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }
`;