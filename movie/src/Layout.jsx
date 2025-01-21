import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
  header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: black;
  }
`;

export default function Layout() {
  console.log("Layout.jsx 실행");
  return (
    <LayoutContainer>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
