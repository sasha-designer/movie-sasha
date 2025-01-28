import MovieCard from "../components/MovieCard";
import styled from "styled-components";
import useReadPopularMovies from "../hooks/useReadPopularMovies";
import useReadTopRatedMovies from "../hooks/useReadTopRatedMovies";

import React, { useCallback, useEffect, useState } from "react";
import MovieSwiper from "../components/MovieSwiper";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Container = styled.div`
  text-align: center;
  padding: auto;
`;

const MovieList = styled.div`
  width: 100%;
  padding: auto;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.background};
  .category-title {
    width: 200px;
    height: 300px;
    margin: 10px;
    font-size: 3rem;
    font-weight: bold;
    color: ${(props) => `${props.theme.color}B3`}; /* 70% opacity */
    text-align: right;
  }
`;

export default function MainPage() {
  console.log("******Main.jsx*********");
  const { readPopularMovies, movies, hasMore } = useReadPopularMovies();
  const { readTopRatedMovies, topMovies } = useReadTopRatedMovies();
  const [page, setPage] = useState(1);

  const loadMoreMovies = useCallback(() => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [hasMore]);

  const [lastElementRef] = useInfiniteScroll(loadMoreMovies);

  useEffect(() => {
    readPopularMovies(page);
    console.log("******파퓰러 useEffect 호출함수*********");
  }, [page]);

  React.useEffect(() => {
    readTopRatedMovies();
    console.log("******탑!!!!! useEffect 호출함수*********");
  }, [readTopRatedMovies]);
  console.log("******파퓰러 movies*********", movies);

  return (
    <Container>
      <MovieSwiper key={topMovies.id} movies={topMovies}></MovieSwiper>
      <div>
        {/* <h1>Popular Movies</h1> */}

        <MovieList>
          <div className="category-title">Popular Movies </div>
          {movies
            // .filter((movie) => !movie.adult)
            .map((movie, index) => (
              <MovieCard
                key={`${movie.id}-${index}`}
                movie={movie}
                ref={index === movies.length - 1 ? lastElementRef : null}
              />
            ))}
        </MovieList>
      </div>
    </Container>
  );
}
