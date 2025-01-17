// import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
import movieDetailData from "../../public/data/movieDetailData.json";
import styled from "styled-components";
import Layout from "../Layout.jsx";
import MovieSwiper from "../components/MovieSwiper.jsx";



export default function Main({ movies }) {
  // const pokemonData = useSelector(state => state.pokemon.data)

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
