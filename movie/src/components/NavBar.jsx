import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useDebounce } from "../hooks/useDebounce";
import useSearchMovies from "../hooks/useSearchMovies";
import { use } from "react";

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
// Nav-bar에 검색 입력 필드를 추가하고, 입력된 검색어를 상태로 관리합니다.
export default function NavBar() {
  console.log("NavBar.jsx 실행");

  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const {
    searchMovies,

    searchedMovies,
  } = useSearchMovies();

  useSearchMovies();
  console.log("searchMovies: ", useSearchMovies);

  console.log("debounceSearch: ", debounceSearch);
  console.log("검색한 결과: ", useSearchMovies(debounceSearch));
  console.log("search: ", search);

  return (
    <>
      <Header>
        <span>Movie</span>
        <input type="text" onChange={handleChange} />
        <button>로그인</button>
        <button>회원가입</button>
      </Header>
    </>
  );
}
