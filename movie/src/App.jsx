import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import MovieCard from './components/MovieCard.jsx'
import Main from './pages/Main.jsx'
import movieListData from '../public/data/movieListData.json'


/*
1. **`MovieCard`** 컴포넌트를 생성합니다.
2. **`App.jsx`** 파일에서 **`MovieCard`** 컴포넌트를 사용하여 영화 목록을 렌더링합니다.
    1. [map 메서드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)를 이용하여 영화 데이터를 **`MovieCard`**로  전달하세요.
3. **`App.jsx`** 파일에서 **`movieListData.json`** 데이터를 import하여 상태로 관리합니다.
4. **`MovieCard`** 컴포넌트는 필요한 데이터를 **`App.jsx`** 파일로 부터 전달받아 **포스터와 제목, 평점 정보**를 렌더링합니다.
5. **`movieListData.json`** 의 길이만큼 화면에 **`MovieCard`**를 렌더링합니다.
*/



function App() {
  // const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(movieListData.results);
  

  console.log("movie list:", movies)

  return (
    <>
      
     <Main movies={movies}></Main>

    </>
  )
}

export default App
