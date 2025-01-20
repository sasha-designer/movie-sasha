import React from "react";
// import movieDetailData from "../../public/data/movieDetailData.json";
import styled from "styled-components";
// import { useParams } from "react-router-dom";

const MovieDetail = ({ movie }) => {
  const MovieDetailLayout = styled.div`
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: center;
    gap: 10px;
    padding: 32px 80px;
    background-color: black;
    color: #ffffffa5;
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
    div {
      border: 1px solid black;
    }

    .info-area {
      padding: 16px;
      margin: 0;
    }

    .title-area {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;

      .title {
        flex-grow: 1;
        text-align: left;
        color: #e3ad3f;
        font-size: 24px;
        font-weight: bold;
      }
    }
  `;

  // const moviees = moviee.find((movie) => movie.id === parseInt(useParams().id));
  console.log("movie detail:", movie);
  const { title, poster_path, vote_average, genres, overview } = movie;
  // const { id } = useParams();
  console.log("movie title:", title);

  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <MovieDetailLayout>
      {/* <div className='poster-area'> */}
      <img src={imgUrl} alt="a" />
      {/* </div> */}
      <div className="info-area">
        <div className="title-area">
          <div className="title">{title}</div>
          <div className="rating">평점: {vote_average}</div>
        </div>

        <div>
          장르:
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
