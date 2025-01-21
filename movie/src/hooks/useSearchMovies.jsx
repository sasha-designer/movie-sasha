import axios from "axios";
import React from "react";
const APIKEY = import.meta.env.VITE_TMDB_API_KEY;

export default function useSearchMovies(searchKeyword) {
  console.log("useSearchMovies.jsx 실행");
  console.log("usesearch 안에 있는 searchKeyword: ", searchKeyword);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (searchKeyword) {
      searchMovies();
    }
  }, [searchKeyword]);

  const searchMovies = React.useCallback(async () => {
    setLoading(true);
    console.log("searchKeyword222: ", searchKeyword);

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
  }, [searchKeyword]);

  return {
    searchMovies,
    searchedMovies,
    loading,
    setLoading,
    error,
  };
}
