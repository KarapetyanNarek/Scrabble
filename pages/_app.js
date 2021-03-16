import { useState } from "react";
import { Provider } from "react-redux";
import SideBarContext from "../context/SideBarContext";
import { ThemeProvider } from "styled-components";
import Layouts from "../views/layouts/Layouts";
import { useStore } from "../store/store";
import { GlobalStyles } from "../styles/GlobalStyles";
import { lightTheme, darkTheme } from "../styles/Theme";
import "../i18n";
import "../styles/style.css";

function App({ Component, pageProps }) {
  // const ISSERVER = typeof window === "undefined";
  const store = useStore(pageProps.initialReduxState);
  const [theme, setTheme] = useState("dark");
  const [open, setOpen] = useState(true);

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  // useEffect(() => {
  //   setOpen(JSON.parse(localStorage.getItem("scrabble-collapse")));
  // }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Provider store={store}>
          <SideBarContext.Provider
            value={{
              open,
              setOpen,
              theme,
              setTheme,
            }}
          >
            <Layouts>
              <Component {...pageProps} />
            </Layouts>
          </SideBarContext.Provider>
        </Provider>
      </>
    </ThemeProvider>
  );
}

export default App;
