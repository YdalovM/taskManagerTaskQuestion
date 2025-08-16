import type { ReactNode } from "react";
import type {
  NOTE_CARD_BY_TYPE,
  NOTE_CARD_POSITION_IMAGE,
  NOTE_CARD_TYPE_LIST,
} from "../config";

export type TNoteCard = keyof typeof NOTE_CARD_BY_TYPE;

export type TNoteCardType = keyof typeof NOTE_CARD_TYPE_LIST;

export type TNoteCardPositionImage = keyof typeof NOTE_CARD_POSITION_IMAGE;

export interface INoteCardDefault {
  description: string;
  idication?: string;
  isEdit?: boolean;
  setDescription?: (description: string) => void;
}

export interface INoteCardLeftImage extends INoteCardDefault {
  image: ReactNode;
}

export interface INoteCardFullImage extends INoteCardDefault {
  image: ReactNode;
  positionImage: TNoteCardPositionImage;
}

export type INoteCard<T extends TNoteCard> =
  T extends typeof NOTE_CARD_TYPE_LIST.TEXT
    ? INoteCardDefault
    : T extends typeof NOTE_CARD_TYPE_LIST.LEFT_IMAGE
    ? INoteCardLeftImage
    : T extends typeof NOTE_CARD_TYPE_LIST.FULL_IMAGE
    ? INoteCardFullImage
    : INoteCardDefault;

export interface INoteCardFull
  extends INoteCardDefault,
    Partial<INoteCardFullImage> {
  description: string;
  type: TNoteCard;
  id: number;
  gradientBorderType?: "none" | "simple" | "complex";
}
