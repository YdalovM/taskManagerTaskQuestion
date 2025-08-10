// Кэш для тестового элемента
let cachedTestElement: HTMLSpanElement | null = null;
let cachedFont: string | null = null;

export const getTestElementByOverflowCount = (
  font: string
): HTMLSpanElement => {
  if (!cachedTestElement || cachedFont !== font) {
    if (cachedTestElement) {
      document.body.removeChild(cachedTestElement);
    }

    cachedTestElement = document.createElement("span");
    cachedTestElement.style.cssText = `font: ${font}; visibility: hidden; position: absolute; white-space: nowrap;`;
    document.body.appendChild(cachedTestElement);
    cachedFont = font;
  }

  return cachedTestElement;
};
