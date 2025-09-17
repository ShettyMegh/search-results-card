import React, { useEffect, useState } from "react";

export const useDebounce = (config: { value: any; delay: number }) => {
  const { value, delay } = config;
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  return { debounceValue };
};
