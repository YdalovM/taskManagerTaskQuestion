import { useCallback, useEffect, useRef } from "react";

export const useResizeTextArriaEditNote = (
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
  lastHeightRef: React.RefObject<number>,
  setIsImageTop: React.Dispatch<React.SetStateAction<boolean>> | (() => void),
  description: string,
  isEdit: boolean
) => {
  const lastImageTopRef = useRef<boolean | null>(null);

  const updateImagePosition = useCallback(
    (height: number) => {
      const shouldBeTop = height > 40;

      if (lastImageTopRef.current !== shouldBeTop) {
        setIsImageTop(shouldBeTop);
        lastImageTopRef.current = shouldBeTop;
      }

      lastHeightRef.current = height;
    },
    [setIsImageTop]
  );

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      let height = textareaRef.current.scrollHeight;

      if (height % 10 === 8) {
        height += 2;
      } else if (height % 2 === 1) {
        height += 1;
      }

      if (height % 10 === 8) {
        height += 2;
      }

      textareaRef.current.style.height = height + "px";

      if (Math.abs(height - lastHeightRef.current) > 5) {
        updateImagePosition(height);
      }
    }
  }, [description, updateImagePosition, isEdit]);
};
