import "./App.scss";
import Main from "./pages/Main.jsx";
import Detail from "./pages/Detail.jsx";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";

function App() {
  // console.log("movie list:", movies);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
