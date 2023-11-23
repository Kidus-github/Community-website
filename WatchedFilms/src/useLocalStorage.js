import { useEffect, useState } from "react";
export function useLocalStorage(initialState, KEY) {
  const [value, setValue] = useState(
    initialState &&
      function () {
        const storedvalue = JSON.parse(localStorage.getItem(KEY));

        return storedvalue ? storedvalue : initialState;
      }
  );
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value, KEY]);
  return [value, setValue];
}
