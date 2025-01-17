// import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
import movieDetailData from "../../public/data/movieDetailData.json";
import styled from "styled-components";
import Layout from "../Layout.jsx";
// import MovieSwiper from "../components/MovieSwiper.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

// import require from "requirejs";

export default function Main({ movies }) {
  // const pokemonData = useSelector(state => state.pokemon.data)
  //vite에서 제공하는 환경변수에서 api키를 가져오는 방법.
  const [moviee, setMoviee] = useState([]);

  const APIKEY = import.meta.env.VITE_TMDB_API_KEY;
  console.log("api키: ", APIKEY);

  // axios
  //   .get("https://api.example.com/data")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });

  // // POST 요청
  // const options = {
  //   method: "GET",
  //   url: "https://api.themoviedb.org/3/movie/popular",
  //   params: { language: "en-US", page: "1" },
  //   headers: {
  //     accept: "application/json",
  //     Authorization: APIKEY,
  //   },
  // };

  // axios
  //   .request(options)
  //   .then((res) => setMoviee(res.data.results))
  //   // .then((res) => console.log("aaaa", res.data.results))
  //   .catch((err) => console.error(err));

  // const dispatch = useDispatch();
  const getPopularMovies = async () => {
    //인기영화 리스트를 조회해오는 함수
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: APIKEY,
      },
    };

    axios
      .request(options)
      .then((res) => setMoviee(res.data.results))
      // .then((res) => console.log("aaaa", res.data.results))
      .catch((err) => console.error(err));
  };

  //호출하기
  useEffect(() => {
    getPopularMovies();
  }, []);

  // fetch("https://api.themoviedb.org/3/authentication", options)
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
  console.log("moviee: ", moviee, moviee.results);
  const MovieList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  `;

  return (
    <>
      {/* <h1>영화 목록</h1> */}

      {/* <MovieSwiper></MovieSwiper> */}
      <MovieList moviee={moviee}>
        {moviee.map((moviee) => (
          <MovieCard key={moviee.id} moviee={moviee} />
        ))}
      </MovieList>
    </>
  );
}
