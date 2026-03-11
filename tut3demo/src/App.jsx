import { useState } from "react";
import Header from "./components/Header";
import MovieInput from "./components/MovieInput";
import MovieList from "./components/MovieList";
import { useEffect } from "react";

function App() {

  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (index) => {
    const updated = movies.filter((_, i) => i !== index);
    setMovies(updated);
  };

  useEffect(() => {
    document.title = `Movies: ${movies.length}`;
  }, [movies]);

  return (
    <div>

      <Header title="Movie List App" />

      <MovieInput addMovie={addMovie} />

      <MovieList
        movies={movies}
        removeMovie={removeMovie}
      />

      <p>Total movies: {movies.length}</p>

    </div>
  );
}

export default App;