import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import useReadPopularMovies from "../hooks/useReadPopularMovies";
import useReadTopRatedMovies from "../hooks/useReadTopRatedMovies";

import React from "react";
import MovieSwiper from "../components/MovieSwiper";

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: black;
`;

export default function MainPage() {
  console.log("******Main.jsx*********");
  const { readPopularMovies, movies } = useReadPopularMovies();
  const { readTopRatedMovies, topMovies } = useReadTopRatedMovies();
  console.log("******api호출함수*********", useReadPopularMovies());

  React.useEffect(() => {
    readPopularMovies();
    console.log("******파퓰러 useEffect 호출함수*********");
  }, []);
  React.useEffect(() => {
    readTopRatedMovies();
    console.log("******탑!!!!! useEffect 호출함수*********");
  }, [readTopRatedMovies]);
  console.log("******파퓰러 movies*********", movies);

  return (
    <>
      <MovieSwiper key={topMovies.id} movies={topMovies}></MovieSwiper>
      <MovieList>
        {movies
          .filter((movie) => !movie.adult)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </MovieList>
    </>
  );
}
