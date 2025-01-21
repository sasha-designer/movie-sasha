import React from "react";

export const useDebounce = (value, delay = 2000) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);
  return debouncedValue;
};
