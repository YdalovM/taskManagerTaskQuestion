import { useEffect, useRef, useState } from "react";
import type { INoteCard } from "../../model/types";
import styles from "./index.module.scss";
import cn from "classnames";
import { getResizeOwerlowBlock } from "../../util/getResizeOwerlowBlock";
import { getLinesWitshElement } from "../../util";
import { NoteHeaderSettings } from "..";
import NoteIndication from "../noteIndication";
import { TextArriaEditNote } from "..";

export default function NoteCardText({
  description,
  idication,
  isEdit,
  setDescription,
  setIsEdit,
}: INoteCard<"text"> & { setIsEdit: (isEdit: boolean) => void }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isOverflowCounter, setIsOverflowCounter] = useState(false);
  const [isTextTop, setIsTextTop] = useState(false);
  const isIndication =
    Boolean(idication) &&
    idication !== "0" &&
    idication !== "+0" &&
    idication !== "+";

  useEffect(() => {
    if (contentRef.current) {
      setIsTextTop(getLinesWitshElement(contentRef.current).length > 1);
    }
    if (contentRef.current && counterRef.current) {
      getResizeOwerlowBlock(
        contentRef.current,
        counterRef.current,
        setIsOverflowCounter,
        280,
        1
      );
    }
  }, [description, idication, isEdit, setDescription, setIsEdit]);

  return (
    <>
      {!isEdit && <NoteHeaderSettings onClick={() => setIsEdit(true)} />}
      <div
        className={cn(styles.noteCard, {
          [styles.noteCard_textTop]: isTextTop || isOverflowCounter,
          [styles.noteCard_edit]: isEdit,
          [styles.noteCard_overflow]: isOverflowCounter && isIndication,
        })}
      >
        {isEdit ? (
          <TextArriaEditNote
            description={description}
            setDescription={setDescription || (() => {})}
            isEdit={isEdit}
          />
        ) : (
          <div ref={contentRef} className={styles.noteCard__text}>
            {description}
          </div>
        )}

        {!isEdit && (
          <NoteIndication counterRef={counterRef} idication={idication || ""} />
        )}
      </div>
    </>
  );
}
