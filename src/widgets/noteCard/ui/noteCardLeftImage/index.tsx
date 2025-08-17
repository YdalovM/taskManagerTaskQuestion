import { useEffect, useRef, useState } from "react";
import type { INoteCard } from "../../model/";
import styles from "./index.module.scss";
import { getResizeOwerlowBlock } from "../../util/getResizeOwerlowBlock";
import cn from "classnames";
import { getLinesWitshElement } from "../../util/getLinesWitshElement";
import { NoteHeaderSettings, TextArriaEditNote } from "..";
import NoteIndication from "../noteIndication";

export default function NoteCardLeftImage({
  image,
  description,
  idication,
  isEdit,
  setDescription,
  setIsEdit,
  isCardSelected = false,
  isSelected = false,
}: INoteCard<"leftImage"> & {
  setIsEdit: (isEdit: boolean) => void;
  isCardSelected?: boolean;
  isSelected?: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [isOverflowCounter, setIsOverflowCounter] = useState(false);
  const [isImageTop, setIsImageTop] = useState(false);
  const isIndication =
    Boolean(idication) &&
    idication !== "0" &&
    idication !== "+0" &&
    idication !== "+";

  useEffect(() => {
    if (contentRef.current) {
      setIsImageTop(getLinesWitshElement(contentRef.current).length > 2);
    }

    if (contentRef.current && counterRef.current) {
      getResizeOwerlowBlock(
        contentRef.current,
        counterRef.current,
        setIsOverflowCounter,
        200,
        2
      );
    }
  }, [description, idication, isEdit]);

  return (
    <>
      {!isEdit && <NoteHeaderSettings onClick={() => setIsEdit(true)} />}
      <div
        className={cn(styles.noteCard__leftImage, {
          [styles.noteCard__leftImage_imageTop]: isImageTop,
          [styles.noteCard_edit]: isEdit,
          [styles.noteCard_cardSelected]: isCardSelected,
        })}
      >
        {image}
        {isEdit ? (
          <TextArriaEditNote
            description={description}
            setDescription={setDescription || (() => {})}
            isEdit={isEdit}
            setIsImageTop={setIsImageTop}
          />
        ) : (
          <div
            ref={contentRef}
            className={cn(styles.noteCard__leftImageDescription, {
              [styles.noteCard__leftImageDescription_overflow]:
                isOverflowCounter && isIndication,
            })}
          >
            {description}
          </div>
        )}

        {!isEdit && (
          <NoteIndication
            counterRef={counterRef}
            idication={idication || ""}
            isSelected={isSelected}
            isCardSelected={isCardSelected}
          />
        )}
      </div>
    </>
  );
}
