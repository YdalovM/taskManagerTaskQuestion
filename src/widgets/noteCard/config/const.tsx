import { NoteCardText, NoteCardLeftImage, NoteCardFullImage } from "../ui";

export const NOTE_CARD_BY_TYPE = {
  text: NoteCardText,
  leftImage: NoteCardLeftImage,
  fullImage: NoteCardFullImage,
};

export const NOTE_CARD_TYPE_LIST = {
  TEXT: "text",
  LEFT_IMAGE: "leftImage",
  FULL_IMAGE: "fullImage",
} as const;
