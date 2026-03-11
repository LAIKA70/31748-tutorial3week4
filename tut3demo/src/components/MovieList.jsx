import MovieItem from "./MovieItem";

function MovieList(props) {

    return (
        <ul>

            {props.movies.map((movie, index) => (
                <MovieItem
                    key={index}
                    name={movie}
                    index={index}
                    removeMovie={props.removeMovie}
                />
            ))}

        </ul>
    );

}

export default MovieList;