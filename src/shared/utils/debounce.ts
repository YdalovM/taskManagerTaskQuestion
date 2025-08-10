export const debounce = (func: () => void, delay: number) => {
  let timeoutId: number;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
};
