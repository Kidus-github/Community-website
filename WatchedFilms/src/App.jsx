import { useEffect, useState } from "react";
import WatchedMovieList from "./Componets/WatchedMovieList.jsx";
import Summary from "./Componets/Summary.jsx";
import NavBar from "./Componets/NavBar.jsx";
import Logo from "./Componets/Logo.jsx";
import Search from "./Componets/Search.jsx";
import NumResults from "./Componets/NumResults.jsx";
import SelectedMovie from "./Componets/SelectedMovie.jsx";
import Loading from "./Componets/Loading.jsx";
import ErrorMsg from "./Componets/ErrorMsg.jsx";
import Box from "./Componets/Box.jsx";
import Main from "./Componets/Main.jsx";
import DisplayList from "./Componets/DisplayList.jsx";

export const KEY = "95042ae7";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("inception");
  const [selectedeMovieID, setSelectedMovieID] = useState(null);

  function handleSelected(id) {
    setSelectedMovieID((cur) => (cur === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedMovieID(null);
  }
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }
  useEffect(() => {
    const Controller = new AbortController();
    async function FetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: Controller.signal }
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data.Search);
        // setError("");
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    FetchMovies();
    return () => {
      Controller.abort();
    };
  }, [query]);

  return (
    <>
      <NavBar>
        <Logo />
        <Search
          query={query}
          handleQuery={(search) => {
            setQuery((query) => (query = search));
          }}
        />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loading />}

          {!isLoading && !error && (
            <DisplayList movies={movies} handleSelected={handleSelected} />
          )}
          {error && <ErrorMsg error={error} />}
        </Box>
        <Box>
          {selectedeMovieID ? (
            <SelectedMovie
              selectedeMovieID={selectedeMovieID}
              OnCloseMovie={handleCloseMovie}
              OnAddWatched={handleAddWatched}
              watched={watched}
              setWatched={setWatched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />{" "}
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
