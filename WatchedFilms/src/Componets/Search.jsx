import { useEffect, useRef } from "react";
/* eslint-disable */
export default function Search({ query, handleQuery }) {
  const inputEl = useRef(null);
  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputEl) return;
      if (e.code === "Enter") {
        inputEl.current.focus();
        handleQuery("");
      }
    }

    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown", callback);
  }, [handleQuery]);
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => handleQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
