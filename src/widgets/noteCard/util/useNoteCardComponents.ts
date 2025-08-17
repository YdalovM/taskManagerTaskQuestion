import { useMemo } from "react";
import { NOTE_CARD_BY_TYPE } from "../config";
import { getTypeIcon } from "./getTypeIcon";
import type {
  ComponentState,
  CardType,
  PositionImage,
} from "../model/stateTypes";

export const useNoteCardComponents = (
  editingType: CardType,
  editingPositionImage: PositionImage
): ComponentState => {
  const NoteCardComponent = useMemo(
    () => NOTE_CARD_BY_TYPE[editingType],
    [editingType]
  );

  const typeIcon = useMemo(
    () => getTypeIcon(editingType, editingPositionImage),
    [editingType, editingPositionImage]
  );

  return {
    NoteCardComponent,
    typeIcon,
  };
};
