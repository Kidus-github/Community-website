import { useState } from "react";
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
import { useMovies } from "./useMovies.js";
import { useLocalStorage } from "./useLocalStorage.js";

export default function App() {
  // const [watched, setWatched] = useState(
  //   [] &&
  //     function () {
  //       const storedvalue = JSON.parse(localStorage.getItem("watched"));
  //       return storedvalue;
  //     }
  // );

  const [query, setQuery] = useState("");
  const [selectedeMovieID, setSelectedMovieID] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], "watched");
  function handleSelected(id) {
    setSelectedMovieID((cur) => (cur === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedMovieID(null);
  }
  function handleAddWatched(movie) {
    console.log(watched);
    setWatched((watched) => [...(watched ?? []), movie]);
  }
  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search
          query={query}
          handleQuery={(search) => {
            setQuery(search);
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
