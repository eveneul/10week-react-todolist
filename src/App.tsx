import { ReactQueryDevtools } from "react-query/devtools";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./style/theme";
import GlobalStyle from "./style/globalStyles";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);
  const handleToggleTheme = () => setTheme((prev) => !prev);
  return (
    <>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />

        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
