import React from "react";
import styled from "styled-components";
//map 메서드를 이용하여 영화 데이터를 MovieCard로  전달하세요.
import { useNavigate } from "react-router-dom";
// import { navigate } from 'hookrouter';

const Card = styled.div`
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: 1px solid ${(props) => props.theme.borderColor};
  /* border-radius: 10px; */
  margin: 10px;
  /* padding: 10px; */
  color: ${(props) => props.theme.color};

  &:hover {
    transform: scale(1.05);
  }

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

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
    color: ${(props) => props.theme.mainColor};
  }
  .rating {
    font-size: 14px;
    text-align: left;
    padding: 4px 8px 16px 8px;
    color: ${(props) => props.theme.color};
  }
`;

export default function MovieCard({ movie }) {
  console.log("MovieCard.jsx 실행");
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
