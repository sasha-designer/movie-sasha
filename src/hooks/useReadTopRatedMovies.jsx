import axios from "axios";
import React from "react";
const APIKEY = import.meta.env.VITE_TMDB_API_KEY;

/**
 * 인기 영화 리스트를 조회하는 함수
 * @returns {Object} - readPopularMovies 함수를 반환
 */
export default function useReadTopRatedMovies() {
  console.log("useReadTopMovies.jsx 실행");
  const [loading, setLoading] = React.useState(false);
  const [topMovies, setTopMovies] = React.useState([]);
  const [error, setError] = React.useState(null);

  const readTopRatedMovies = React.useCallback(async () => {
    setLoading(true);
    //인기영화 리스트를 조회해오는 함수
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKEY}`,
      },
    };

    axios
      .request(options)
      .then((res) => setTopMovies(res.data.results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { readTopRatedMovies, topMovies, setLoading };
}
