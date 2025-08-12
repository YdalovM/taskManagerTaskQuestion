import { useEffect, useRef, useState } from "react";
import type { INoteCard } from "../../model/types";
import NoteHeaderSettings from "../noteHeaderSettings";
import NoteIndication from "../noteIndication";
import styles from "./index.module.scss";
import cn from "classnames";
import { getResizeOwerlowBlock } from "../../util/getResizeOwerlowBlock";
import TextArriaEditNote from "../textArriaEditNote";

export default function NoteCardFullImage({
  image,
  description,
  idication,
  positionImage = "TOP",
  isEdit,
  setDescription,
  setIsEdit,
}: INoteCard<"fullImage"> & { setIsEdit: (isEdit: boolean) => void }) {
  const counterRef = useRef<HTMLDivElement>(null);
  const isImageTop = positionImage === "TOP";
  const [isOverflowCounter, setIsOverflowCounter] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && counterRef.current) {
      getResizeOwerlowBlock(
        contentRef.current,
        counterRef.current,
        setIsOverflowCounter,
        280,
        1
      );
    }
  }, [description, idication, isEdit]);

  return (
    <>
      {!isEdit && (
        <NoteHeaderSettings
          isImage={isImageTop}
          onClick={() => setIsEdit(true)}
        />
      )}
      <div
        className={cn(styles.noteCard__fullImage, {
          [styles.noteCard__fullImage_bottom]: !isImageTop,
          [styles.noteCard_edit]: isEdit,
          [styles.noteCard__fullImageBottom_edit]: isEdit && !isImageTop,
        })}
      >
        {image}
        {isEdit ? (
          <TextArriaEditNote
            description={description}
            setDescription={setDescription || (() => {})}
            isEdit={isEdit}
          />
        ) : (
          <div
            ref={contentRef}
            className={cn(styles.noteCard__fullImageDescription, {
              [styles.noteCard__fullImageDescription_overflow]:
                isOverflowCounter && isImageTop,
            })}
          >
            {description}
          </div>
        )}
      </div>
      {!isEdit && (
        <NoteIndication
          counterRef={counterRef}
          idication={idication || ""}
          isImage={!isImageTop}
        />
      )}
    </>
  );
}
