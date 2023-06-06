import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import GlobalStyle from "./style/globalStyles";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./state/atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      <ThemeProvider theme={!isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />

        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
