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

export default function Main() {
  const { readPopularMovies, movies, loading, error } = useReadPopularMovies();
  const { readTopRatedMovies, topMovies } = useReadTopRatedMovies();
  console.log("Main -> movies", movies);
  console.log("readTopRatedMovies", readTopRatedMovies);

  React.useEffect(() => {
    readPopularMovies();
  }, [readPopularMovies]);
  React.useEffect(() => {
    readTopRatedMovies();
  }, [readTopRatedMovies]);

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
