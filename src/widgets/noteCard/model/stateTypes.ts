// Базовые типы для карточки
export type CardType = "text" | "leftImage" | "fullImage";
export type PositionImage = "TOP" | "BOTTOM";
export type GradientBorderType = "none" | "simple" | "complex";

// Состояние редактирования
export interface EditState {
  isEdit: boolean;
  editingDescription: string;
  editingType: CardType;
  editingPositionImage: PositionImage;
  isEditingType: boolean;
}

// Состояние выделения
export interface SelectionState {
  isSelected: boolean;
  isCardSelected: boolean;
}

// Состояние навигации
export interface NavigationState {
  isKeyboardNavigation: boolean;
  selectedCardIndex: number;
}

// Основное состояние карточки
export interface CardState {
  id: number;
  description: string;
  type: CardType;
  image?: React.ReactNode;
  idication?: React.ReactNode;
  positionImage?: PositionImage;
  gradientBorderType?: GradientBorderType;
}

// Полное состояние карточки в store
export interface CardInStore extends CardState, EditState, SelectionState {}

// Состояние для компонентов

export interface ComponentState {
  NoteCardComponent: React.ComponentType<{
    description: string;
    image: React.ReactNode;
    idication: string;
    positionImage: PositionImage;
    isEdit: boolean;
    setDescription?: (description: string) => void;
    setIsEdit: (isEdit: boolean) => void;
    isSelected?: boolean;
    isCardSelected?: boolean;
  }>;
  typeIcon:
    | "text"
    | "leftImage"
    | "fullImage"
    | "fullImageTop"
    | "fullImageBottom";
}

// Состояние действий
export interface ActionState {
  setIsEdit: (isEdit: boolean) => void;
  setDescription: (description: string) => void;
  setEditingDescription: (editingDescription: string) => void;
  setType: (type: CardType) => void;
  setEditingType: (editingType: CardType) => void;
  setEditingPositionImage: (editingPositionImage: PositionImage) => void;
  setIsEditingType: (isEditingType: boolean) => void;
}

// Состояние обработчиков событий
export interface HandlerState {
  handleMouseEnter: (
    onCardHover?: (index: number) => void,
    cardIndex?: number
  ) => void;
  handleClick: (onCardClick?: (cardId: number) => void) => void;
}

// Состояние утилит
export interface UtilityState {
  notifyEditStateChange: (
    onEditStateChange?: (isEditing: boolean) => void
  ) => void;
}

// Полное состояние хука useNoteCard
export interface NoteCardHookState
  extends CardState,
    EditState,
    SelectionState,
    ComponentState,
    ActionState,
    HandlerState,
    UtilityState {}

// Типы для пропсов компонентов
export interface NoteCardProps {
  onCardHover?: (index: number) => void;
  onCardClick?: (cardId: number) => void;
  cardIndex?: number;
  cardRef?: (el: HTMLDivElement | null) => void;
  id: number;
  onEditStateChange?: (isEditing: boolean) => void;
}

// Типы для store
export interface NoteCardStoreState {
  initialCards: CardState[];
  cards: Record<number, CardInStore>;
}

export interface NoteCardStoreActions {
  getCardbyId: (id: number) => CardInStore | undefined;
  getCardbyIndex: (index: number) => CardInStore | undefined;
  setCardIsEdit: (id: number, isEdit: boolean) => void;
  setCardDescription: (id: number, description: string) => void;
  setCardEditingDescription: (id: number, editingDescription: string) => void;
  setCardType: (id: number, type: CardType) => void;
  setCardEditingType: (id: number, editingType: CardType) => void;
  setCardEditingPositionImage: (
    id: number,
    editingPositionImage: PositionImage
  ) => void;
  setCardIsSelected: (id: number, isSelected: boolean) => void;
  setCardIsCardSelected: (id: number, isCardSelected: boolean) => void;
  setCardIsEditingType: (id: number, isEditingType: boolean) => void;
  setCardPositionImage: (id: number, positionImage: PositionImage) => void;
}

export interface NoteCardStore
  extends NoteCardStoreState,
    NoteCardStoreActions {}
