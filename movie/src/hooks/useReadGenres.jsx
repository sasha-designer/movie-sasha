import axios from "axios";
import React from "react";
const APIKEY = import.meta.env.VITE_TMDB_API_KEY;

/**
 * 인기 영화 리스트를 조회하는 함수
 * @returns {Object} - readPopularMovies 함수를 반환
 */
export default function useReadGenres() {
  const [loading, setLoading] = React.useState(false);
  const [genres, setGenres] = React.useState([]);
  const [error, setError] = React.useState(null);

  const readGenres = React.useCallback(async () => {
    setLoading(true);
    //인기영화 리스트를 조회해오는 함수
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: { language: "ko" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKEY}`,
      },
    };

    axios
      .request(options)
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { readGenres, loading, setLoading, genres, error };
}
