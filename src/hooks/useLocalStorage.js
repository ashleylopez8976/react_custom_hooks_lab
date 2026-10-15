import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  // Load saved text, or use the initial value.
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);

    return storedValue !== null ? storedValue : initialValue;
  });

  // Save the updated text.
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}