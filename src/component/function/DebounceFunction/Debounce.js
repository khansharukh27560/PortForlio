import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer); // Clean up
  }, [value, delay]);

  return debounced;
}

export default useDebounce;
