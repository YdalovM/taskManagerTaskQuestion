import { useRef } from "react";
import cn from "classnames";
import styles from "./index.module.scss";
import type { ITextArriaEditNoteProps } from "../../model/";
import { useResizeTextArriaEditNote } from "../../util/resizeTextArriaEditNote";

export default function TextArriaEditNote({
  description,
  setDescription,
  isEdit,
  setIsImageTop,
}: ITextArriaEditNoteProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lastHeightRef = useRef<number>(0);

  useResizeTextArriaEditNote(
    textareaRef,
    lastHeightRef,
    setIsImageTop || (() => {}),
    description,
    isEdit
  );

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
