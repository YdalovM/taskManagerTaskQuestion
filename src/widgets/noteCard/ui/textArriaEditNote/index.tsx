import { useCallback, useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./index.module.scss";

export default function TextArriaEditNote({
  description,
  setDescription,
  isEdit,
  setIsImageTop,
}: {
  description: string;
  setDescription: (value: string) => void;
  isEdit: boolean;
  setIsImageTop?: (value: boolean) => void;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lastHeightRef = useRef<number>(0);
  const lastImageTopRef = useRef<boolean | null>(null);

  const updateImagePosition = useCallback(
    (height: number) => {
      const shouldBeTop = height > 40;

      // Обновляем только если значение действительно изменилось
      if (lastImageTopRef.current !== shouldBeTop) {
        setIsImageTop?.(shouldBeTop);
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

      // Обновляем позицию изображения только если высота изменилась
      if (Math.abs(height - lastHeightRef.current) > 5) {
        updateImagePosition(height);
      }
    }
  }, [description, updateImagePosition, isEdit]);

  return (
    <textarea
      ref={textareaRef}
      rows={1}
      value={description}
      onChange={(e) => setDescription?.(e.target.value)}
      className={cn(styles.textarea)}
      placeholder="Write your idea!"
      maxLength={1000}
      autoFocus
    />
  );
}
