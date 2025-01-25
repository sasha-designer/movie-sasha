import "./App.scss";
import MainPage from "./pages/MainPage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import SearchedPage from "./pages/SearchedPage.jsx";
import EmptyLayout from "./layouts/EmptyLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";

function App() {
  console.log("App.jsx 실행");
  return (
    <>
      <ThemeProvider></ThemeProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<MainPage />}></Route>
          <Route path="/detail/:id" element={<DetailPage />}></Route>
          <Route path="/search/:search" element={<SearchedPage />}></Route>
        </Route>
        <Route element={<EmptyLayout />}>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="sign-up" element={<SignupPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
