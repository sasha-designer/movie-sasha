import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

export default function EmptyLayout() {
  console.log("Layout.jsx 실행");
  return (
    <>
      <header></header>
      <main style={{ height: "100vh" }}>
        <Outlet />
      </main>
    </>
  );
}
