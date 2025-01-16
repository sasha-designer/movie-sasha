import React from 'react';
import styled from 'styled-components'
//map 메서드를 이용하여 영화 데이터를 MovieCard로  전달하세요.
import { Link } from 'react-router-dom';


const Card = styled.div`
display: flex;
flex-direction: column;
width: 200px;
height: 300px;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
padding: 10px;

img {
  width: 100%;
  flex-grow: 1;
  height: 70%;
  object-fit: cover;
}

div {
  padding: 10px;
}


`


export default function MovieCard ({ movie }) {


  const { title, poster_path, vote_average } = movie;
  const imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  console.log(movie);

  return (
    <>
        <Link to='/detail'>
          <Card>
            <img src={imgUrl} alt="a" />
            <div>{movie.title}</div>
            <div>{vote_average}</div>
          </Card>
        </Link>
        

    </>
  );
};





