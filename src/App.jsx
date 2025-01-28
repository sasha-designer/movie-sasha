import "./App.scss";
import MainPage from "./pages/MainPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import SearchedPage from "./pages/SearchedPage.jsx";
import EmptyLayout from "./layouts/EmptyLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";
// import ThemeContext from "./context/";
import { useState } from "react";
// import StyledThemeProvider from "./context/DarkModeContext.js";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme.js";

function App() {
  console.log("App.jsx 실행");

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("theme: ", theme);
  };

  return (
    <>
      {/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <StyledThemeProvider></StyledThemeProvider> */}
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Routes>
          <Route element={<MainLayout theme={theme} setTheme={setTheme} />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/detail/:id" element={<DetailPage />}></Route>
            <Route path="/search/:search" element={<SearchedPage />}></Route>
          </Route>

          <Route element={<EmptyLayout />}>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="sign-up" element={<SignupPage />}></Route>
          </Route>
        </Routes>
        {/* </ThemeContext.Provider> */}
      </ThemeProvider>
    </>
  );
}

export default App;
