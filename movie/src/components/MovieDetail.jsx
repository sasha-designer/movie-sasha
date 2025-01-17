import React from "react";
import movieDetailData from "../../public/data/movieDetailData.json";
import styled from "styled-components";

const MovieDetail = () => {
  const MovieDetailLayout = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
    gap: 10px;

    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
    }
    div {
      /* padding: 10px; */
      /* margin: 5px; */
      border: 1px solid black;
    }

    .title {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .info-area {
      padding: 0;
      margin: 0;
    }
  `;

  const movie = movieDetailData;
  console.log("movie detail:", movie);
  const { title, poster_path, vote_average, genres, overview } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <MovieDetailLayout>
      {/* <div className='poster-area'> */}
      <img src={imgUrl} alt="a" />
      {/* </div> */}
      <div className="info-area">
        <div className="title">
          <div>{title}</div>
          <div>{vote_average.toFixed(1)}</div>
        </div>

        <div>
          {genres.map((genre) => (
            <span key={genre.id}>{genre.name} </span>
          ))}
        </div>
        <div>{overview}</div>
      </div>
    </MovieDetailLayout>
  );
};

export default MovieDetail;
