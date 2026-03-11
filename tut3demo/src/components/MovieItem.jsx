function MovieItem(props) {

    return (
        <li>
            {props.name}

            <button onClick={() => props.removeMovie(props.index)}>
                Remove
            </button>
        </li>
    );
}

export default MovieItem;