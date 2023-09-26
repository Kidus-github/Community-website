import List from "./List";
export default function DisplayList({ movies, handleSelected }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <List
          movie={movie}
          key={movie.imdbID}
          handleSelected={handleSelected}
        />
      ))}
    </ul>
  );
}
