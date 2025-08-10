export const getLinesWitshElement = (element: HTMLDivElement) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  const rects = range.getClientRects();
  return rects;
};
