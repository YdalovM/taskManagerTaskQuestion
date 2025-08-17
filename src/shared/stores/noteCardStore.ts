import { create } from "zustand";
import { NOTE_CARD_MOCK } from "../model";
import type { INoteCardFull } from "@/widgets/noteCard/model";
import type {
  CardInStore,
  NoteCardStore as INoteCardStore,
} from "@/widgets/noteCard/model/stateTypes";

interface NoteCardStore extends INoteCardStore {
  initialCards: INoteCardFull[];
  cards: Record<number, CardInStore>;
}

const cardsObject: Record<number, CardInStore> = NOTE_CARD_MOCK.reduce<
  Record<number, CardInStore>
>((acc, card) => {
  acc[card.id] = {
    ...card,
    isEdit: false,
    editingDescription: card.description,
    editingType: card.type,
    editingPositionImage: card.positionImage || "TOP",
    isSelected: false,
    isCardSelected: false,
    isEditingType: false,
  };
  return acc;
}, {});

export const useNoteCardStore = create<NoteCardStore>((set, get) => ({
  initialCards: NOTE_CARD_MOCK,
  cards: cardsObject,
  getCardbyId: (id: number) => get().cards[id],
  getCardbyIndex: (index: number) => Object.values(get().cards)[index],

  setCardIsEdit: (id: number, isEdit: boolean) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          isEdit,
        },
      },
    })),

  setCardDescription: (id: number, description: string) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          description,
        },
      },
    })),

  setCardEditingDescription: (id: number, editingDescription: string) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          editingDescription,
        },
      },
    })),

  setCardType: (id: number, type: "text" | "leftImage" | "fullImage") =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          type,
        },
      },
    })),

  setCardEditingType: (
    id: number,
    editingType: "text" | "leftImage" | "fullImage"
  ) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          editingType,
        },
      },
    })),

  setCardEditingPositionImage: (
    id: number,
    editingPositionImage: "TOP" | "BOTTOM"
  ) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          editingPositionImage,
        },
      },
    })),

  setCardIsSelected: (id: number, isSelected: boolean) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          isSelected,
        },
      },
    })),

  setCardIsCardSelected: (id: number, isCardSelected: boolean) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          isCardSelected,
        },
      },
    })),

  setCardIsEditingType: (id: number, isEditingType: boolean) =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          isEditingType,
        },
      },
    })),

  setCardPositionImage: (id: number, positionImage: "TOP" | "BOTTOM") =>
    set((state) => ({
      cards: {
        ...state.cards,
        [id]: {
          ...state.cards[id],
          positionImage,
        },
      },
    })),
}));
