import { useCallback } from "react";
import { useNoteCardStore } from "@/shared/stores/noteCardStore";
import type { ActionState } from "../model/stateTypes";

export const useNoteCardActions = (id: number): ActionState => {
  const {
    setCardIsEdit,
    setCardDescription,
    setCardEditingDescription,
    setCardType,
    setCardEditingType,
    setCardEditingPositionImage,
    setCardIsEditingType,
  } = useNoteCardStore();

  const setIsEdit = useCallback(
    (isEdit: boolean) => {
      if (isEdit) {
        const { cards } = useNoteCardStore.getState();
        const isAnyCardEditing = Object.values(cards).some(
          (card) => card.isEdit
        );

        if (isAnyCardEditing) {
          return; // Не позволяем редактировать несколько карточек одновременно
        }
      }

      setCardIsEdit(id, isEdit);
    },
    [id, setCardIsEdit]
  );

  const setDescription = useCallback(
    (description: string) => setCardDescription(id, description),
    [id, setCardDescription]
  );

  const setEditingDescription = useCallback(
    (editingDescription: string) =>
      setCardEditingDescription(id, editingDescription),
    [id, setCardEditingDescription]
  );

  const setType = useCallback(
    (type: "text" | "leftImage" | "fullImage") => setCardType(id, type),
    [id, setCardType]
  );

  const setEditingType = useCallback(
    (editingType: "text" | "leftImage" | "fullImage") =>
      setCardEditingType(id, editingType),
    [id, setCardEditingType]
  );

  const setEditingPositionImage = useCallback(
    (editingPositionImage: "TOP" | "BOTTOM") =>
      setCardEditingPositionImage(id, editingPositionImage),
    [id, setCardEditingPositionImage]
  );

  const setIsEditingType = useCallback(
    (isEditingType: boolean) => setCardIsEditingType(id, isEditingType),
    [id, setCardIsEditingType]
  );

  return {
    setIsEdit,
    setDescription,
    setEditingDescription,
    setType,
    setEditingType,
    setEditingPositionImage,
    setIsEditingType,
  };
};
