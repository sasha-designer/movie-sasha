import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* padding: 20px 10px; */
  gap: 8px;

  input {
    flex-grow: 1;
    height: 30px;
  }

  span,
  button {
    display: flex;
    align-items: center;
    font-size: 12px;
  }
`;

// const navigate = useNavigate();

export default function NavBar() {
  return (
    <>
      <Header>
        <span>🎬</span>
        <input type="text" />
        <button>로그인</button>
        <button>회원가입</button>
      </Header>
    </>
  );
}
