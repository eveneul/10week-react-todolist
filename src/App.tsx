import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import GlobalStyle from "./style/globalStyles";
import { useState } from "react";

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <Router />

        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
