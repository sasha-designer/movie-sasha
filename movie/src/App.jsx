import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import MovieCard from './components/MovieCard.jsx'
import Main from './pages/Main.jsx'
import movieListData from '../public/data/movieListData.json'
import Detail from './pages/Detail.jsx'
import { Routes, Route, useNavigate, BrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'



function App() {
  // const [count, setCount] = useState(0)
  const [movies, setMovies] = useState(movieListData.results);
  

  console.log("movie list:", movies)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main movies={movies} />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
        </Route>
       </Routes>
    </>
  )
}

export default App
