import { useMemo, useState } from "react";
import styles from "./index.module.scss";
import { NoteCardLayout } from "./ui";
import { NOTE_CARD_BY_TYPE } from "./config";
import type { INoteCardFull } from "./model";
import XMark from "../../assets/svgs/xMark.svg?react";
import ArrowIcon from "../../assets/svgs/arrow.svg?react";
import cn from "classnames";
import { IconByTypeNote } from "./util";
import EmptyImage from "../../assets/emptyImage.avif";

export default function NoteCard({
  description: initialDescription,
  type: initialType,
  image,
  idication,
  positionImage: initialPositionImage = "TOP",
  gradientBorderType = "none",
}: INoteCardFull) {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(initialDescription);
  const [editingDescription, setEditingDescription] =
    useState(initialDescription);

  const [type, setType] = useState(initialType);
  const [editType, setEditType] = useState(type);
  const [isEditingType, setIsEditingType] = useState(false);

  const [positionImage, setPositionImage] = useState(initialPositionImage);

  const NoteCardComponent = NOTE_CARD_BY_TYPE[editType];

  const handleSave = () => {
    setIsEdit(false);
    setDescription(editingDescription);
    setType(editType);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditType(type);
    setEditingDescription(description);
  };

  const typeIcon = useMemo(() => {
    if (editType === "fullImage" && positionImage === "TOP") {
      return "fullImageTop";
    } else if (editType === "fullImage" && positionImage === "BOTTOM") {
      return "fullImageBottom";
    }
    return editType;
  }, [editType, positionImage]);

  const handleChangeType = (
    type: "text" | "leftImage" | "fullImage",
    positionImage?: "TOP" | "BOTTOM"
  ) => {
    setEditType(type);
    setPositionImage(positionImage || "TOP");
    setIsEditingType(false);
  };

  return (
    <div className={cn(styles.noteCard, { [styles.noteCard_edit]: isEdit })}>
      {/* TODO: блок для тестов первого задания, открывается по клику на карточку*/}
      {isEdit && (
        <>
          <div className={styles.noteCard__editContainer}>
            <XMark
              onClick={handleCancelEdit}
              className={styles.noteCard__editButtonClose}
            />
            <div className={styles.noteCard__editButtonContainer}>
              <button
                className={cn(styles.noteCard__editButton, {
                  [styles.noteCard__editButton__leftImage]:
                    editType === "leftImage",
                })}
                onClick={() => setIsEditingType((prev) => !prev)}
              >
                <IconByTypeNote type={typeIcon} />
              </button>
              <button
                className={styles.noteCard__editButtonSave}
                onClick={handleSave}
              >
                <ArrowIcon />
              </button>
            </div>
          </div>
          {isEditingType && (
            <div className={styles.noteCard__editModalPanel}>
              <button
                onClick={() => handleChangeType("text")}
                className={styles.noteCard__editModalPanelButton}
              >
                <IconByTypeNote type="text" />
              </button>
              <button
                onClick={() => handleChangeType("fullImage", "BOTTOM")}
                className={styles.noteCard__editModalPanelButton}
              >
                <IconByTypeNote type="fullImageBottom" />
              </button>
              <button
                onClick={() => handleChangeType("fullImage", "TOP")}
                className={styles.noteCard__editModalPanelButton}
              >
                <IconByTypeNote type="fullImageTop" />
              </button>
              <button
                onClick={() => handleChangeType("leftImage")}
                className={styles.noteCard__editModalPanelButton}
              >
                <IconByTypeNote type="leftImage" />
              </button>
            </div>
          )}
        </>
      )}
      <NoteCardLayout isEdit={isEdit} gradientBorderType={gradientBorderType}>
        <NoteCardComponent
          setIsEdit={setIsEdit}
          description={editingDescription}
          image={image || <img src={EmptyImage} alt="empty" />}
          idication={idication}
          positionImage={positionImage}
          isEdit={isEdit}
          setDescription={setEditingDescription}
        />
      </NoteCardLayout>
    </div>
  );
}
