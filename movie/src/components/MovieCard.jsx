import React from 'react';
import styled from 'styled-components'
//map 메서드를 이용하여 영화 데이터를 MovieCard로  전달하세요.


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
  /* height: 70%; */
}

div {
  padding: 10px;
}


`



const MovieCard = () => {




  return (
    <>

        <Card>
          <img src="" alt="a" />
          <div>제목</div>
          <div>평점</div>
        </Card>

    </>
  );
};




export default MovieCard;
