import axios from "axios";
import React from "react";

const APIKEY = import.meta.env.VITE_TMDB_API_KEY;

export default function useReadMovie() {
  console.log("useReadMovie.jsx 실행");
  const [loading, setLoading] = React.useState(false);
  const [movie, setMovie] = React.useState(null);
  const [error, setError] = React.useState(null);

  const readMovie = React.useCallback(async (id) => {
    setLoading(true);
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "ko-KR" },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIKEY}`,
      },
    };

    axios
      .request(options)
      .then((res) => setMovie(res.data))
      .catch((err) => {
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { readMovie, loading, setLoading, movie, error };
}
