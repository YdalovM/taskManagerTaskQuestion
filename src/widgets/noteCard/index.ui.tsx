import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { NoteCardLayout } from "./ui";
import { NOTE_CARD_BY_TYPE } from "./config";
import type { INoteCardFull } from "./model";

import cn from "classnames";
import EmptyImage from "../../assets/emptyImage.avif";
import { EditModalPanel } from "./ui/editModalPanel";
import { getTypeIcon } from "./util/getTypeIcon";

export default function NoteCard({
  description: initialDescription,
  type: initialType,
  image,
  idication,
  positionImage: initialPositionImage = "TOP",
  gradientBorderType = "none",
  isSelected = false,
  isCardSelected = false,
  onCardHover,
  onCardClick,
  cardIndex,
  cardRef,
  id,
  onEditStateChange,
}: INoteCardFull & {
  onCardHover?: (index: number) => void;
  onCardClick?: (cardId: number) => void;
  cardIndex?: number;
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(initialDescription);
  const [editingDescription, setEditingDescription] =
    useState(initialDescription);
  const [type, setType] = useState(initialType);
  const [editType, setEditType] = useState(type);
  const [isEditingType, setIsEditingType] = useState(false);
  const [positionImage, setPositionImage] = useState(initialPositionImage);
  const [editingPositionImage, setEditingPositionImage] =
    useState(initialPositionImage);

  const NoteCardComponent = NOTE_CARD_BY_TYPE[editType];

  const typeIcon = getTypeIcon(editType, editingPositionImage);

  const handleMouseEnter = () => {
    // Блокируем hover если карточка в режиме редактирования
    if (isEdit) return;

    if (onCardHover && cardIndex !== undefined) {
      onCardHover(cardIndex);
    }
  };

  const handleClick = () => {
    // Разрешаем клик если карточка в режиме редактирования (для закрытия редактирования)
    if (onCardClick && id !== undefined) {
      onCardClick(id);
    }
  };

  // Отслеживаем изменения состояния редактирования
  useEffect(() => {
    if (onEditStateChange) {
      onEditStateChange(isEdit);
    }
  }, [isEdit, onEditStateChange]);

  return (
    <div
      ref={cardRef}
      className={cn(styles.noteCard, { [styles.noteCard_edit]: isEdit })}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
    >
      {/* TODO: блок для тестов первого задания, открывается по клику на карточку*/}
      {isEdit && (
        <EditModalPanel
          setDescription={setDescription}
          setIsEdit={setIsEdit}
          setType={setType}
          setEditType={setEditType}
          setEditingDescription={setEditingDescription}
          type={type}
          editingDescription={editingDescription}
          editType={editType}
          setIsEditingType={setIsEditingType}
          typeIcon={typeIcon}
          isEditingType={isEditingType}
          setPositionImage={setEditingPositionImage}
          positionImage={editingPositionImage}
          description={description}
          setPositionImageFinal={setPositionImage}
          positionImageFinal={positionImage}
        />
      )}
      <NoteCardLayout
        isEdit={isEdit}
        gradientBorderType={gradientBorderType}
        isSelected={isSelected}
        isCardSelected={isCardSelected}
      >
        <NoteCardComponent
          setIsEdit={setIsEdit}
          description={isEdit ? editingDescription : description}
          image={image || <img src={EmptyImage} alt="empty" />}
          idication={idication}
          positionImage={isEdit ? editingPositionImage : positionImage}
          isEdit={isEdit}
          setDescription={setEditingDescription}
          isCardSelected={isCardSelected}
        />
      </NoteCardLayout>
    </div>
  );
}
