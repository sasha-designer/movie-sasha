import { useParams } from "react-router-dom";
import useReadMovie from "../hooks/useReadMovie";
import React from "react";
import MovieDetail from "../components/MovieDetail";
import useReadGenres from "../hooks/useReadGenres";

export default function Detail() {
  const { id } = useParams();

  const { readMovie, movie, loading } = useReadMovie();
  const { genres } = useReadGenres();

  React.useEffect(() => {
    readMovie(id);
  }, [readMovie, id]);

  return (
    <>
      {loading && <div style={{ height: "100vh", width: "100vw" }}>로딩중</div>}
      {movie && <MovieDetail movie={movie} />}
      <h1>{genres}</h1>
    </>
  );
}
