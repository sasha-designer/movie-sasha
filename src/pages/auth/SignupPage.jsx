import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import viteLogo from "/Users/mac/workspace/movie/src/assets/vite.svg";

import { useState } from "react";

import styled from "styled-components";

const FormContatiner = styled.div`
  width: 100vw;
  height: 100%;
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
  }

  label {
    margin-bottom: 10px;
    display: block;
    text-align: left;
  }

  input {
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
  }

  .signup-button {
    margin-top: 16px;
    /* padding: 10px 20px; */
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

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <FormContatiner>
      <div className="container">
        <Link className="home-btn" to="/">
          <img src={viteLogo} alt="aa" />
          <div>Movie</div>
        </Link>
        <h1 style={{ color: "white" }}>Sign up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>아이디</label>
            <input
              type="text"
              name="username"
              placeholder="아이디"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-button">
            회원가입
          </button>
        </form>
        <div className="out-link">
          이미 계정이 있으신가요?{" "}
          <a onClick={() => navigate("/login")}>로그인하기 </a>
        </div>
      </div>
    </FormContatiner>
  );
};

export default SignupPage;
