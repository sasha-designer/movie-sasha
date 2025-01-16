// import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard"


export default function Main({ movies }) {
    // const pokemonData = useSelector(state => state.pokemon.data)


    return (
        <>
            {/* {pokemonData.map(el => <MovieCard key={el.id} pokemon={el} />)} */}
            <h1>영화 목록</h1>

            <div>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
            {/* <MovieCard></MovieCard> */}
        </>
    )
}

