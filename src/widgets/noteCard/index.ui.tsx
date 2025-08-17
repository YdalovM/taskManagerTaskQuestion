import { useEffect } from "react";
import styles from "./index.module.scss";
import { NoteCardLayout } from "./ui";
import cn from "classnames";
import EmptyImage from "../../assets/emptyImage.avif";
import { EditModalPanel } from "./ui/editModalPanel";
import { useNoteCard } from "./util";
import { useNoteCardStore } from "@/shared/stores/noteCardStore";
import type { NoteCardProps } from "./model/stateTypes";

export default function NoteCard({
  onCardHover,
  onCardClick,
  cardIndex,
  cardRef,
  id,
  onEditStateChange,
}: NoteCardProps) {
  const {
    isEdit,
    description,
    editingDescription,
    type,
    editingType,
    image,
    idication,
    positionImage,
    gradientBorderType,
    editingPositionImage,
    isSelected,
    isCardSelected,
    isEditingType,
    NoteCardComponent,
    typeIcon,
    handleMouseEnter,
    handleClick,
    setIsEdit,
    setDescription,
    setEditingDescription,
    setType,
    setEditingType,
    setEditingPositionImage,
    setIsEditingType,
  } = useNoteCard(id);

  useEffect(() => {
    if (onEditStateChange) {
      onEditStateChange(isEdit || false);
    }
  }, [isEdit, onEditStateChange]);

  return (
    <div
      ref={cardRef}
      className={cn(styles.noteCard, { [styles.noteCard_edit]: isEdit })}
      onMouseEnter={() => handleMouseEnter(onCardHover, cardIndex)}
      onClick={() => handleClick(onCardClick)}
    >
      {isEdit && (
        <EditModalPanel
          setDescription={setDescription}
          setIsEdit={setIsEdit}
          setType={setType}
          setEditType={setEditingType}
          setEditingDescription={setEditingDescription}
          type={type}
          editingDescription={editingDescription}
          editType={editingType}
          setIsEditingType={setIsEditingType}
          typeIcon={typeIcon}
          isEditingType={isEditingType}
          setPositionImage={setEditingPositionImage}
          positionImage={editingPositionImage}
          description={description}
          setPositionImageFinal={(newPositionImage) => {
            // Обновляем финальное значение positionImage в store
            const { setCardPositionImage } = useNoteCardStore.getState();
            setCardPositionImage(id, newPositionImage);
          }}
          positionImageFinal={positionImage || "TOP"}
        />
      )}
      <NoteCardLayout
        isEdit={isEdit}
        gradientBorderType={gradientBorderType}
        isSelected={isEdit ? false : isSelected}
        isCardSelected={isEdit ? false : isCardSelected}
      >
        <NoteCardComponent
          setIsEdit={setIsEdit}
          description={isEdit ? editingDescription : description}
          image={image || <img src={EmptyImage} alt="empty" />}
          idication={String(idication || "")}
          positionImage={isEdit ? editingPositionImage : positionImage || "TOP"}
          isEdit={isEdit}
          setDescription={setEditingDescription}
          isSelected={isEdit ? false : isSelected}
          isCardSelected={isEdit ? false : isCardSelected}
        />
      </NoteCardLayout>
    </div>
  );
}
