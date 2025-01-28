import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import viteLogo from "/Users/mac/workspace/movie/src/assets/vite.svg";
import { supabase } from "./supabseClient";

// const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' })

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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (data) alert("로그인성공");
    if (error) {
      console.error("Google 로그인 실패:", error.message);
    }
  };

  async function signInWithKakao() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
    if (data) alert("로그인성공");
    if (error) {
      console.error("Kakao 로그인 실패:", error.message);
    }
  }

  useEffect(() => {
    // 로그인 상태 확인
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        navigate("/");
      } else {
        setLoading(false);
      }
      setUser(session?.user ?? null);
    };

    getSession();

    // 로그인 상태 변경 시 업데이트
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/");
      }
      setUser(session?.user ?? null);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  //구글로그아웃
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
    alert("로그아웃되었습니다.");
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
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
          <div>
            <button onClick={handleGoogleLogin}>구글로 로그인</button>
          </div>
          <div>
            <button onClick={signInWithKakao}>카카오로 로그인</button>
          </div>
          <div>
            <button onClick={() => navigate("/")}>로그아웃</button>
          </div>
          <div className="out-link">
            비밀번호를 잊어버리셨나요? <a>비밀번호 찾기 </a>
          </div>
          <div className="out-link">
            아직 계정이 없으신가요?{" "}
            <a onClick={() => navigate("/sign-up")}>회원가입하기 </a>
          </div>
        </div>
      </FormContatiner>
    </>
  );
};

export default LoginPage;
