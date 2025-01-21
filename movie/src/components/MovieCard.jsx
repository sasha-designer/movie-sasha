import React from "react";
import styled from "styled-components";
//map 메서드를 이용하여 영화 데이터를 MovieCard로  전달하세요.
import { useNavigate } from "react-router-dom";
// import { navigate } from 'hookrouter';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: 1px solid #ffffff1f;
  /* border-radius: 10px; */
  margin: 10px;
  /* padding: 10px; */

  img {
    width: 100%;
    flex-grow: 1;
    height: 70%;
    object-fit: cover;
    /* overflow: hidden; */
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    padding: 16px 8px 4px 8px;
    color: #e3ad3f;
  }
  .rating {
    font-size: 14px;
    text-align: left;
    padding: 4px 8px 16px 8px;
    color: #ffffff;
  }
`;

export default function MovieCard({ movie }) {
  const { title, poster_path, vote_average } = movie;

  // console.log("movie card moviee: ", movie);
  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const navigate = useNavigate();

  return (
    <>
      <Card onClick={() => navigate(`/detail/${movie.id}`)}>
        <img src={imgUrl} alt="a" />
        <div className="title">{title}</div>
        <div className="rating">평점: {vote_average}</div>
      </Card>
    </>
  );
}
