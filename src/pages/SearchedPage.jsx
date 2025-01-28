import { useParams } from "react-router-dom";
import useReadMovie from "../hooks/useReadMovie";
import React from "react";
import MovieDetail from "../components/MovieDetail";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import useSearchMovies from "../hooks/useSearchMovies";

// import useReadGenres from "../hooks/useReadGenres";

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
`;

export default function SearchedPage() {
  console.log("Searched.jsx 실행");
  const { search } = useParams();
  const { searchedMovies, searchMovies } = useSearchMovies();

  React.useEffect(() => {
    if (!search) return;

    searchMovies(search);
  }, [search]);

  return (
    <>
      <MovieList>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "100px",
          }}
        >
          <h1>Your Keyword: {search}</h1>
        </div>

        {searchedMovies
          .filter((searchedMovie) => !searchedMovie.adult)
          .map((searchedMovie) => (
            <MovieCard key={searchedMovie.id} movie={searchedMovie} />
          ))}
      </MovieList>
    </>
  );
}
