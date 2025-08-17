import type { PropsWithChildren, ReactNode } from "react";
import type {
  NOTE_CARD_BY_TYPE,
  NOTE_CARD_POSITION_IMAGE,
  NOTE_CARD_TYPE_LIST,
} from "../config";
import type { CardType, PositionImage, GradientBorderType } from "./stateTypes";

export type TNoteCard = keyof typeof NOTE_CARD_BY_TYPE;

export type TNoteCardType = keyof typeof NOTE_CARD_TYPE_LIST;

export type TNoteCardPositionImage = keyof typeof NOTE_CARD_POSITION_IMAGE;

export interface INoteCardDefault {
  description: string;
  idication: string;
  isEdit?: boolean;
  setDescription?: (description: string) => void;
  isSelected?: boolean;
  isCardSelected?: boolean;
}

export interface INoteCardLeftImage extends INoteCardDefault {
  image: ReactNode;
  idication: string;
}

export interface INoteCardFullImage extends INoteCardDefault {
  image: ReactNode;
  positionImage: TNoteCardPositionImage;
  idication: string;
}

export type INoteCard<T extends TNoteCard> =
  T extends typeof NOTE_CARD_TYPE_LIST.TEXT
    ? INoteCardDefault
    : T extends typeof NOTE_CARD_TYPE_LIST.LEFT_IMAGE
    ? INoteCardLeftImage
    : T extends typeof NOTE_CARD_TYPE_LIST.FULL_IMAGE
    ? INoteCardFullImage
    : INoteCardDefault;

export interface INoteCardFull {
  description: string;
  idication: string;
  isEdit?: boolean;
  setDescription?: (description: string) => void;
  isSelected?: boolean;
  isCardSelected?: boolean;
  image?: ReactNode;
  positionImage?: TNoteCardPositionImage;
  type: CardType;
  id: number;
  gradientBorderType?: GradientBorderType;
  editingDescription?: string;
  editingType?: CardType;
  cardRef?: (el: HTMLDivElement | null) => void;
  onCardClick?: (cardId: number) => void;
  onEditStateChange?: (isEditing: boolean) => void;
}

export interface IEditModalPanelProps {
  setIsEdit: (isEdit: boolean) => void;
  setDescription: (description: string) => void;
  setType: (type: CardType) => void;
  setEditingDescription: (editingDescription: string) => void;
  setEditType: (editType: CardType) => void;
  type: CardType;
  editingDescription: string;
  editType: CardType;
  setIsEditingType: (isEditingType: boolean) => void;
  typeIcon:
    | "text"
    | "leftImage"
    | "fullImage"
    | "fullImageTop"
    | "fullImageBottom";
  isEditingType: boolean;
  setPositionImage: (positionImage: PositionImage) => void;
  positionImage: PositionImage;
  description: string;
  setPositionImageFinal: (positionImage: PositionImage) => void;
  positionImageFinal: PositionImage;
}

export type NoteCardLayoutProps = PropsWithChildren<{
  onClick?: () => void;
  isEdit?: boolean;
  gradientBorderType?: GradientBorderType;
  isSelected?: boolean;
  isCardSelected?: boolean;
}>;

export interface ITextArriaEditNoteProps {
  description: string;
  setDescription: (value: string) => void;
  isEdit: boolean;
  setIsImageTop?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface INoteCardProps {
  onCardHover?: (index: number) => void;
  onCardClick?: (cardId: number) => void;
  cardIndex?: number;
  cardRef?: (el: HTMLDivElement | null) => void;
  id: number;
  onEditStateChange?: (isEditing: boolean) => void;
}
