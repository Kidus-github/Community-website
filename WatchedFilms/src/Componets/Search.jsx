export default function Search({ query, handleQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => handleQuery(e.target.value)}
    />
  );
}
