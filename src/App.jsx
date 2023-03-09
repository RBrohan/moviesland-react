import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

import { useApp } from "./hooks/useApp";

import "./App.css";

const App = () => {
  const { searchTerm, setSearchTerm, movies, searchMovies } = useApp();

  return (
    <div className="app">
      <h1>MoviesLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
