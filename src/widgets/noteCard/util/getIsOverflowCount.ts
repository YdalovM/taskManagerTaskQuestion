import { getLinesWitshElement } from "./getLinesWitshElement";
import { getTestElementByOverflowCount } from "./getTestElementByOverflowCount";

export const getIsOverflowCount = (
  element: HTMLDivElement,
  counter: HTMLDivElement,
  maxLineWidth: number,
  maxLines?: number
) => {
  const rects = getLinesWitshElement(element);
  if (rects.length < (maxLines || 0)) return false;

  const availableWidth = maxLineWidth + 30 - counter.offsetWidth;
  const font = window.getComputedStyle(element).font;

  const testElement = getTestElementByOverflowCount(font);
  testElement.textContent = "a";

  const lastLine = rects[rects.length - 1];

  return lastLine.width > maxLineWidth || lastLine.width > availableWidth;
};
