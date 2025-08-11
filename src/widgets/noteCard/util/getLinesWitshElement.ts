export const getLinesWitshElement = (
  element: HTMLDivElement | HTMLTextAreaElement
) => {
  const range = document.createRange();
  range.selectNodeContents(element);
  const rects = range.getClientRects();
  return rects;
};
