//  95042ae7
import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import searchIcon from "./assets/search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=95042ae7";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovies = async (title: string) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies(search);
  }, [search]);
  return (
    <div className="app">
      <h1>FilmLand</h1>
      <div className="search">
        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for movies "
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <img
            src={searchIcon}
            alt="Search"
            onClick={() => {
              searchMovies(search);
            }}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movie Found</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
