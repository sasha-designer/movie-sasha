import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../hooks/useDebounce";
import useSearchMovies from "../hooks/useSearchMovies";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "../pages/auth/supabseClient";

const Header = styled.nav`
  width: 100vw;
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
    color: ${(props) => props.theme.color};
    padding-right: 16px;
    padding-left: 16px;
  }
`;
// Nav-bar에 검색 입력 필드를 추가하고, 입력된 검색어를 상태로 관리합니다.
export default function NavBar({ theme, setTheme }) {
  console.log("NavBar.jsx 실행");
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);

  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // 로그인 상태 확인
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      console.log("session: ", session);
    };

    getSession();

    // 로그인 상태 변경 시 업데이트
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (debounceSearch) {
      navigate(`/search/${debounceSearch}`);
    }
  }, [debounceSearch]);

  console.log("debounceSearch: ", debounceSearch);
  console.log("search: ", search);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${search}`);
    }
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    console.log("theme: ", theme);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate("/");
    alert("로그아웃되었습니다.");
  };

  //구글로그아웃
  // async function signOut() {
  //   const { error } = await supabase.auth.signOut();
  // }

  return (
    <>
      <Header>
        <Link to="/">
          <span>Movie</span>
        </Link>
        <input type="text" onChange={handleChange} onKeyDown={handleKeyPress} />
        <button onClick={toggleTheme} style={{ background: "none" }}>
          {theme === "light" ? "🌞" : "💡"}
          {/* 💡 */}
        </button>

        {user ? (
          <>
            <img
              src={user.user_metadata.avatar_url}
              alt="User Avatar"
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
            <span>{user.email}</span>
            {/* <span>{user.user_metadata.name}</span> */}

            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("login")}>Login</button>
            <button onClick={() => navigate("sign-up")}>Sign Up</button>
          </>
        )}
      </Header>
    </>
  );
}
