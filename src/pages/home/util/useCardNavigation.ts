import { useState, useCallback, useRef, useEffect } from "react";
import { useNoteCardStore } from "@/shared/stores/noteCardStore";

export const useCardNavigation = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [isAnyCardEditing, setIsAnyCardEditing] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { cards, setCardIsSelected, setCardIsCardSelected } =
    useNoteCardStore();
  const cardIds = Object.keys(cards)
    .map(Number)
    .sort((a, b) => a - b);

  const updateSelectedCard = useCallback(
    (index: number) => {
      cardIds.forEach((cardId, cardIndex) => {
        setCardIsSelected(cardId, cardIndex === index);
      });
    },
    [cardIds, setCardIsSelected]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isAnyCardEditing) return;

      switch (event.key) {
        case "ArrowUp": {
          event.preventDefault();
          const newIndex =
            selectedCardIndex > 0 ? selectedCardIndex - 1 : cardIds.length - 1;
          setSelectedCardIndex(newIndex);
          setIsKeyboardNavigation(true);
          updateSelectedCard(newIndex);
          break;
        }
        case "ArrowDown": {
          event.preventDefault();
          const newIndex =
            selectedCardIndex < cardIds.length - 1 ? selectedCardIndex + 1 : 0;
          setSelectedCardIndex(newIndex);
          setIsKeyboardNavigation(true);
          updateSelectedCard(newIndex);
          break;
        }
        case " ": {
          event.preventDefault();
          const currentCardId = cardIds[selectedCardIndex];
          if (currentCardId !== undefined) {
            const currentCard = cards[currentCardId];
            if (currentCard) {
              setCardIsCardSelected(currentCardId, !currentCard.isCardSelected);
            }
          }
          break;
        }
      }
    },
    [
      selectedCardIndex,
      isAnyCardEditing,
      cardIds,
      cards,
      setCardIsCardSelected,
      updateSelectedCard,
    ]
  );

  const handleCardHover = useCallback(
    (index: number) => {
      if (isAnyCardEditing) return;
      setIsKeyboardNavigation(false);
      setSelectedCardIndex(index);
      updateSelectedCard(index);
    },
    [isAnyCardEditing, updateSelectedCard]
  );

  const handleCardClick = useCallback(
    (cardId: number) => {
      if (isAnyCardEditing) return;
      const currentCard = cards[cardId];
      if (currentCard) {
        setCardIsCardSelected(cardId, !currentCard.isCardSelected);
      }
    },
    [isAnyCardEditing, cards, setCardIsCardSelected]
  );

  const handleEditStateChange = useCallback((isEditing: boolean) => {
    setIsAnyCardEditing(isEditing);
  }, []);

  const scrollToSelectedCard = useCallback(
    (index: number) => {
      if (!isKeyboardNavigation) return;
      const cardElement = cardRefs.current[index];
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        });
      }
    },
    [isKeyboardNavigation]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    scrollToSelectedCard(selectedCardIndex);
  }, [selectedCardIndex, scrollToSelectedCard]);

  return {
    selectedCardIndex,
    isKeyboardNavigation,
    isAnyCardEditing,
    cardRefs,
    cards,
    cardIds,
    handleCardHover,
    handleCardClick,
    handleEditStateChange,
  };
};
