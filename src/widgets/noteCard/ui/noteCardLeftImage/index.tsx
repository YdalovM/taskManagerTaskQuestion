import { useEffect, useRef, useState } from "react";
import type { INoteCard } from "../../model/types";
import styles from "./index.module.scss";
import { getResizeOwerlowBlock } from "../../util/getResizeOwerlowBlock";
import cn from "classnames";
import { getLinesWitshElement } from "../../util/getLinesWitshElement";

export default function NoteCardLeftImage({
  image,
  description,
  idication,
}: INoteCard<"leftImage">) {
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isOverflowCounter, setIsOverflowCounter] = useState(false);
  const [isImageTop, setIsImageTop] = useState(false);
  const isIndication =
    Boolean(idication) &&
    idication !== "0" &&
    idication !== "+0" &&
    idication !== "+";

  const isNewPosts = idication?.includes("+");
  useEffect(() => {
    if (contentRef.current) {
      setIsImageTop(getLinesWitshElement(contentRef.current).length > 2);
    }

    if (contentRef.current && counterRef.current) {
      getResizeOwerlowBlock(
        contentRef.current,
        counterRef.current,
        setIsOverflowCounter,
        220,
        2
      );
    }
  }, [description, idication]);

  return (
    <div
      className={cn(styles.noteCard__leftImage, {
        [styles.noteCard__leftImage_imageTop]: isImageTop,
      })}
    >
      {image}
      <div
        ref={contentRef}
        className={cn(styles.noteCard__leftImageDescription, {
          [styles.noteCard__leftImageDescription_overflow]:
            isOverflowCounter && isIndication,
        })}
      >
        {description}
      </div>
      {isIndication && (
        <div
          ref={counterRef}
          className={cn(styles.counter, {
            [styles.counter_newPosts]: isNewPosts,
          })}
        >
          {idication}
        </div>
      )}
    </div>
  );
}
