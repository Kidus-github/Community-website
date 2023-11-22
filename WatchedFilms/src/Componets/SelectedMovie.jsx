import Loading from "./Loading";
import StarRating from "../StarRateing";
import { useState, useEffect, useRef } from "react";
import { KEY } from "../App";
export default function SelectedMovie({
  selectedeMovieID,
  OnCloseMovie,
  OnAddWatched,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [Rating, setRating] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (Rating) countRef.current = countRef.current + 1;
  }, [Rating]);
  const isWatched = watched
    ?.map((movie) => movie.imdbID)
    .includes(selectedeMovieID);
  const WatchedUserRating = watched?.find(
    (movie) => movie.imdbID === selectedeMovieID
  )?.userRating;
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Relesed: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovies = {
      imdbID: selectedeMovieID,
      title,
      year,
      poster,
      userRating: Number(Rating),
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      countRatingDecisions: countRef.current,
    };
    OnAddWatched(newWatchedMovies);
    OnCloseMovie();
  }
  useEffect(() => {
    function Callback(e) {
      e.code === "Escape" && OnCloseMovie();
    }

    document.addEventListener("keydown", Callback);
    return () => {
      document.removeEventListener("keydown", Callback);
    };
  }, [OnCloseMovie]);
  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => {
      document.title = "Watched Movies";
    };
  }, [title]);
  useEffect(() => {
    async function SelectedMovie() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedeMovieID}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    SelectedMovie();
  }, [selectedeMovieID]);
  return (
    <div className="details">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={OnCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    key={movie.imdbID}
                    onSetRating={setRating}
                  />
                  {Rating > 0 && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <StarRating
                  maxRating={10}
                  size={24}
                  key={movie.imdbID}
                  defaultRating={WatchedUserRating}
                />
              )}
            </div>
            <p>
              <em>{plot}</em>
              <span>Starring {actors}</span>
              <span>Directed by {director}</span>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
