import "./App.scss";
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Searched from "./pages/Searched.jsx";

function App() {
  console.log("App.jsx 실행");
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/search/:search" element={<Searched />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
