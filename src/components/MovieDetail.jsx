import React from "react";
// import movieDetailData from "../../public/data/movieDetailData.json";
import styled from "styled-components";
// import { useParams } from "react-router-dom";

const MovieDetail = ({ movie }) => {
  console.log("MoiveDetail.jsx 실행");
  const MovieDetailLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    padding: 16px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    position: relative;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: center;

      .info-area {
        position: absolute;
        /* top: 50%;
        left: 50%; */
        bottom: 0;
        /* left: 50%; */
        /* transform: translate(-50%, -50%); */
        background-color: ${(props) => props.theme.background};
        padding: 16px;
        border-radius: 8px;
      }
    }

    .poster-area {
      img {
        max-width: 100%;
        height: auto;
      }
    }
    div {
      border: none;
    }

    .info-area {
      padding: 0 16px 16px 16px;
      margin: 0;
      text-align: left;
    }

    .title-area {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px 0 0;

      .title {
        color: #e3ad3f;
        font-size: 24px;
        font-weight: bold;
      }
    }

    .genres {
      text-align: left;
      color: #65ddf5;
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
      <div className="poster-area">
        <img src={imgUrl} alt="a" />
      </div>

      {/* </div> */}
      <div className="info-area">
        <div className="title-area">
          <div className="title">{title}</div>
          <div className="rating">평점: {vote_average}</div>
        </div>

        <div className="genres">
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
