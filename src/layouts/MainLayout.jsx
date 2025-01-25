import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  header {
    height: 60px;
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: ${(props) => props.theme.background};
  }
`;

export default function Layout({ theme, setTheme }) {
  console.log("Layout.jsx 실행");
  return (
    <LayoutContainer>
      <header>
        <NavBar theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <Outlet />
      </main>
    </LayoutContainer>
  );
}
