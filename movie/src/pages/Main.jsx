// import { useSelector } from "react-redux"
import MovieCard from "../components/MovieCard"


export default function Main() {
    // const pokemonData = useSelector(state => state.pokemon.data)


    return (
        <>
            {/* {pokemonData.map(el => <MovieCard key={el.id} pokemon={el} />)} */}
            <MovieCard></MovieCard>
        </>
    )
}

