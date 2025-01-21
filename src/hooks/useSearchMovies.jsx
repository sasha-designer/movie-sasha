import axios from "axios";
import React from "react";
const APIKEY = import.meta.env.VITE_TMDB_API_KEY;

export default function useSearchMovies() {
  console.log("useSearchMovies.jsx 실행");
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const searchMovies = React.useCallback(async (searchKeyword) => {
    setLoading(true);
    console.log("searchKeyword222: ", searchKeyword);

    setSearchedMovies([]);

    console.log("searchMovies 실행");
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: searchKeyword,
        include_adult: "false",
        language: "ko-KR",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKEY}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    axios
      .request(options)
      .then((res) => setSearchedMovies(res.data.results))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    searchMovies,
    searchedMovies,
    loading,
    setLoading,
    error,
  };
}
