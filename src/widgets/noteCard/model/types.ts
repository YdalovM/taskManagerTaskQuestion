import type { PropsWithChildren, ReactNode } from "react";
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
  isSelected?: boolean;
  isCardSelected?: boolean;
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
  isSelected?: boolean;
  isCardSelected?: boolean;
  cardRef?: (el: HTMLDivElement | null) => void;
  onCardClick?: (cardId: number) => void;
  onEditStateChange?: (isEditing: boolean) => void;
}

export interface IEditModalPanelProps {
  setIsEdit: (isEdit: boolean) => void;
  setDescription: (description: string) => void;
  setType: (type: "text" | "leftImage" | "fullImage") => void;
  setEditingDescription: (editingDescription: string) => void;
  setEditType: (editType: "text" | "leftImage" | "fullImage") => void;
  type: "text" | "leftImage" | "fullImage";
  editingDescription: string;
  editType: "text" | "leftImage" | "fullImage";
  setIsEditingType: (isEditingType: boolean) => void;
  typeIcon:
    | "text"
    | "leftImage"
    | "fullImage"
    | "fullImageTop"
    | "fullImageBottom";
  isEditingType: boolean;
  setPositionImage: (positionImage: "TOP" | "BOTTOM") => void;
  positionImage: "TOP" | "BOTTOM";
  description: string;
  setPositionImageFinal: (positionImage: "TOP" | "BOTTOM") => void;
  positionImageFinal: "TOP" | "BOTTOM";
}

export type NoteCardLayoutProps = PropsWithChildren<{
  onClick?: () => void;
  isEdit?: boolean;
  gradientBorderType?: "none" | "simple" | "complex";
  isSelected?: boolean;
  isCardSelected?: boolean;
}>;

export interface ITextArriaEditNoteProps {
  description: string;
  setDescription: (value: string) => void;
  isEdit: boolean;
  setIsImageTop?: React.Dispatch<React.SetStateAction<boolean>>;
}
