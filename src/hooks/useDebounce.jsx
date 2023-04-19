import { useEffect, useState } from "react";

/**
 * @template T
 * @param {T} value
 * @param {number} delay
 * @returns {T}
 */
function useDebounce(value, delay = 200) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
