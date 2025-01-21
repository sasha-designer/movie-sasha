import { useParams } from "react-router-dom";
import useReadMovie from "../hooks/useReadMovie";
import React from "react";
import MovieDetail from "../components/MovieDetail";
// import useReadGenres from "../hooks/useReadGenres";

export default function DetailPage() {
  console.log("Detail.jsx 실행");
  const { id } = useParams();

  const { readMovie, movie, loading, genres } = useReadMovie();
  // const { genres } = useReadGenres();

  React.useEffect(() => {
    readMovie(id);
  }, [readMovie, id]);

  return (
    <div style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
      {loading && <div style={{ height: "100vh", width: "100vw" }}>로딩중</div>}
      {movie && <MovieDetail movie={movie} />}
      <h1>{genres}</h1>
    </div>
  );
}
