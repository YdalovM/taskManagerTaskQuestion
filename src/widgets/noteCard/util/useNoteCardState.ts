import { useNoteCardStore } from "@/shared/stores/noteCardStore";
import type { CardState, EditState, SelectionState } from "../model/stateTypes";

export const useNoteCardState = (
  id: number
): CardState & EditState & SelectionState => {
  const { cards } = useNoteCardStore();

  const card = cards[id];

  if (!card) {
    throw new Error(`Card with id ${id} not found`);
  }

  const {
    isEdit = false,
    description,
    editingDescription = description,
    type,
    editingType = type,
    image,
    idication,
    positionImage,
    gradientBorderType = "none",
    editingPositionImage,
    isSelected = false,
    isCardSelected = false,
    isEditingType = false,
  } = card;

  return {
    id,
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
  };
};
