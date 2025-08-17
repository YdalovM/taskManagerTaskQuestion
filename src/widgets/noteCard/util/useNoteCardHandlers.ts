import { useCallback } from "react";
import type { HandlerState } from "../model/stateTypes";

export const useNoteCardHandlers = (
  id: number,
  isEdit: boolean
): HandlerState => {
  const handleMouseEnter = useCallback(
    (onCardHover?: (index: number) => void, cardIndex?: number) => {
      if (isEdit) return;
      if (onCardHover && cardIndex !== undefined) {
        onCardHover(cardIndex);
      }
    },
    [isEdit]
  );

  const handleClick = useCallback(
    (onCardClick?: (cardId: number) => void) => {
      if (onCardClick && id !== undefined) {
        onCardClick(id);
      }
    },
    [id]
  );

  return {
    handleMouseEnter,
    handleClick,
  };
};
