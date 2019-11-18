import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 0 30px 0 ;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.colors.background}
  }

  h1,h2,h3,h4, button {
    font-family: "Bebas Neue", cursive;
  }

  a, button {
    cursor: pointer;
  }
`;
