import { getIsOverflowCount } from "./getIsOverflowCount";
import { debounce } from "../../../shared";

export const getResizeOwerlowBlock = (
  element: HTMLDivElement,
  counter: HTMLDivElement,
  setIsOverflowCounter: (isOverflowCounter: boolean) => void,
  maxLineWidth: number,
  maxLines?: number
) => {
  if (!element || !counter) return;

  const updateIsOverflowCounter = () => {
    const isOverflowCounter = getIsOverflowCount(
      element,
      counter,
      maxLineWidth,
      maxLines
    );

    setIsOverflowCounter(isOverflowCounter);
  };

  const debouncedUpdate = debounce(updateIsOverflowCounter, 100);

  updateIsOverflowCounter();

  const resizeObserver = new ResizeObserver(debouncedUpdate);
  resizeObserver.observe(element);

  return () => resizeObserver.disconnect();
};
