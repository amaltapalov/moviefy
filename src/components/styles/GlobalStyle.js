import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0 0 30px 0 ;
    box-sizing: border-box;
    font-family: "Abel", sans-serif;
    color: #fff;
    background: ${props => props.theme.colors.background}
  }

  a, button {
    cursor: pointer;
  }

  button {
    font-family: "Abel", sans-serif;
  }
`;
