import axios from "axios";
import React from "react";
const APIKEY = import.meta.env.VITE_TMDB_API_KEY;

/**
 * 인기 영화 리스트를 조회하는 함수
 * @returns {Object} - readPopularMovies 함수를 반환
 */
export default function useReadPopularMovies() {
  console.log("useReadPopularMovies.jsx 실행");
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const readPopularMovies = React.useCallback(async () => {


    setLoading(true);
    //인기영화 리스트를 조회해오는 함수
    console.log("readPopularMovies 실행");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "ko-KR", page: "3" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKEY}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    };


    axios
      .request(options)
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { readPopularMovies, loading, setLoading, movies, error };
}
