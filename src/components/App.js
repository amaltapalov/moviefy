import React from "react";
import { Router } from "@reach/router";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
    </ThemeProvider>
  </>
);

export default App;
