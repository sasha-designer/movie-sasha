import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import viteLogo from "/Users/mac/workspace/movie/src/assets/vite.svg";

const FormContatiner = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    color: white;
    padding: 20px auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    max-width: 460px;
  }

  .home-btn {
    padding: 10px 16px;
    margin: auto;
    width: auto;
    height: auto;
    border: 1px solid #cd9525;
    border-radius: 15px;
    color: #cd9525;

    img {
      width: 30px;
      height: 30px;
      filter: invert(53%) sepia(32%) saturate(747%) hue-rotate(1deg)
        brightness(97%) contrast(101%);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 460px;
  }

  label {
    margin-bottom: 10px;
    display: block;
    text-align: left;
  }

  input {
    margin-bottom: 16px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
  }

  .login-button {
    margin-top: 16px;
    border-radius: 5px;
    background-color: white;
    color: black;
    cursor: pointer;
    width: 100%;
  }

  .out-link {
    padding: 40px 0 0 0;

    a {
      color: #e3ad3f;
      &:hover {
        color: #cd9525;
        cursor: pointer;
      }
      &:visited {
        color: red;
      }
    }
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <FormContatiner>
      <div className="container">
        <Link className="home-btn" to="/">
          <img src={viteLogo} alt="aa" />
          <div>Movie</div>
        </Link>
        <h1>Login</h1>
        {/* //로그인 페이지 UI 만들기 */}
        <form>
          <div>
            <label>아이디</label>
            <input type="text" placeholder="아이디" />
          </div>
          <div>
            <label>비밀번호</label>
            <input type="password" placeholder="비밀번호" />
          </div>

          <button className="login-button" type="submit">
            로그인
          </button>
        </form>

        {/* <button onClick={() => navigate("/sign-up")}>회원가입</button> */}
        <div className="out-link">
          비밀번호를 잊어버리셨나요? <a>비밀번호 찾기 </a>
        </div>
        <div className="out-link">
          아직 계정이 없으신가요?{" "}
          <a onClick={() => navigate("/sign-up")}>회원가입하기 </a>
        </div>
      </div>
    </FormContatiner>
  );
};

export default LoginPage;
