import { useRef } from "react";
import { useKey } from "../useKey";
/* eslint-disable */
export default function Search({ query, handleQuery }) {
  const inputEl = useRef(null);
  useKey("Enter", function () {
    if (document.activeElement === inputEl) return;

    inputEl.current.focus();
    handleQuery("");
  });

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
