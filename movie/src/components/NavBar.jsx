import React from "react";
import styled from "styled-components";

const Header = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
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

  span {
    min-width: 30px;
    color: white;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export default function NavBar() {
  console.log("NavBar.jsx 실행");
  return (
    <>
      <Header>
        <span>Movie</span>
        <input type="text" />
        <button>로그인</button>
        <button>회원가입</button>
      </Header>
    </>
  );
}
