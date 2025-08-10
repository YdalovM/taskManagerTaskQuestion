import { NOTE_CARD_TYPE_LIST } from "../../../widgets/noteCard/config/const";
import { NOTE_CARD_MOCK } from "../config/const";

export const { leftImageNoteCards, textNoteCards } = {
  leftImageNoteCards: NOTE_CARD_MOCK.filter(
    (item) => item.type === NOTE_CARD_TYPE_LIST.LEFT_IMAGE
  ),
  textNoteCards: NOTE_CARD_MOCK.filter(
    (item) => item.type === NOTE_CARD_TYPE_LIST.TEXT
  ),
};
