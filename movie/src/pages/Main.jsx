// import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
import movieDetailData from "../../public/data/movieDetailData.json";
import styled from "styled-components";
import Layout from "../Layout.jsx";
import MovieSwiper from "../components/MovieSwiper.jsx";
import { useEffect, useState } from "react";
// import axios from "axios";
// import require from "requirejs";

export default function Main({ movies }) {
  // const pokemonData = useSelector(state => state.pokemon.data)
  //vite에서 제공하는 환경변수에서 api키를 가져오는 방법.

  const APIKEY = import.meta.env.VITE_TMDB_API_KEY;
  // console.log("api키: ", APIKEY);

  const MovieList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <>
      {/* <h1>영화 목록</h1> */}

      <MovieSwiper movies={movies}></MovieSwiper>
      <MovieList>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieList>
    </>
  );
}
