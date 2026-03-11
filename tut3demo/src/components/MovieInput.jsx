import { useState } from "react";

function MovieInput(props) {

    const [movie, setMovie] = useState("");

    const handleAdd = () => {
        props.addMovie(movie);
        setMovie("");
    };

    return (
        <div>

            <input
                value={movie}
                onChange={(e) => setMovie(e.target.value)}
                placeholder="Enter movie name"
            />

            <button onClick={handleAdd}>
                Add Movie
            </button>

        </div>
    );
}

export default MovieInput;