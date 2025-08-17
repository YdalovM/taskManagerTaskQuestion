import { useNoteCardState } from "./useNoteCardState";
import { useNoteCardActions } from "./useNoteCardActions";
import { useNoteCardHandlers } from "./useNoteCardHandlers";
import { useNoteCardComponents } from "./useNoteCardComponents";
import type { NoteCardHookState } from "../model/stateTypes";

export const useNoteCard = (id: number): NoteCardHookState => {
  // Состояние карточки
  const state = useNoteCardState(id);

  // Действия с карточкой
  const actions = useNoteCardActions(id);

  // Обработчики событий
  const handlers = useNoteCardHandlers(id, state.isEdit);

  // Компоненты
  const components = useNoteCardComponents(
    state.editingType,
    state.editingPositionImage || "TOP"
  );

  return {
    // Состояние
    ...state,

    // Компоненты
    ...components,

    // Обработчики
    ...handlers,

    // Действия
    ...actions,

    // Утилиты
    notifyEditStateChange: (
      onEditStateChange?: (isEditing: boolean) => void
    ) => {
      if (onEditStateChange) {
        onEditStateChange(state.isEdit || false);
      }
    },
  };
};
