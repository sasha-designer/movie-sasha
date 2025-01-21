import "./App.scss";
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import SearchedPage from "./pages/SearchedPage.jsx";
import EmptyLayout from "./layouts/EmptyLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";

function App() {
  console.log("App.jsx 실행");
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
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
