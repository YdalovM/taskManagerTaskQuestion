import { useEffect, useRef, useState } from "react";
import type { INoteCard } from "../../model/types";
import styles from "./index.module.scss";
import cn from "classnames";
import { getResizeOwerlowBlock } from "../../util/getResizeOwerlowBlock";
import { getLinesWitshElement } from "../../util";

export default function NoteCardText({
  description,
  idication,
}: INoteCard<"text">) {
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isOverflowCounter, setIsOverflowCounter] = useState(false);
  const [isTextTop, setIsTextTop] = useState(false);
  const isIndication =
    Boolean(idication) &&
    idication !== "0" &&
    idication !== "+0" &&
    idication !== "+";

  const isNewPosts = idication?.includes("+");

  useEffect(() => {
    if (contentRef.current) {
      setIsTextTop(getLinesWitshElement(contentRef.current).length > 1);
    }
    if (contentRef.current && counterRef.current) {
      getResizeOwerlowBlock(
        contentRef.current,
        counterRef.current,
        setIsOverflowCounter,
        295,
        1
      );
    }
  }, [description, idication]);

  return (
    <div
      className={cn(styles.noteCard, {
        [styles.noteCard_textTop]: isTextTop,
        [styles.noteCard_overflow]: isOverflowCounter && isIndication,
      })}
    >
      <div ref={contentRef} className={styles.noteCard__text}>
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
