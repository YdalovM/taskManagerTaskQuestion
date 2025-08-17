import { NoteCard } from "../../widgets";
import { useState, useEffect, useCallback, useRef } from "react";
import cn from "classnames";

import styles from "./index.module.scss";
import { NOTE_CARD_MOCK } from "./config/const";

export default function Home() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);
  const [selectedCardIds, setSelectedCardIds] = useState<number[]>([]);
  const [isAnyCardEditing, setIsAnyCardEditing] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Блокируем навигацию если редактируется любая карточка
      if (isAnyCardEditing) return;

      switch (event.key) {
        case "ArrowUp":
          event.preventDefault();
          setIsKeyboardNavigation(true);
          setSelectedCardIndex((prev) =>
            prev > 0 ? prev - 1 : NOTE_CARD_MOCK.length - 1
          );
          break;
        case "ArrowDown":
          event.preventDefault();
          setIsKeyboardNavigation(true);
          setSelectedCardIndex((prev) =>
            prev < NOTE_CARD_MOCK.length - 1 ? prev + 1 : 0
          );
          break;
        case " ": {
          event.preventDefault();
          const currentCard = NOTE_CARD_MOCK[selectedCardIndex];
          if (currentCard) {
            setSelectedCardIds((prev) =>
              prev.includes(currentCard.id)
                ? prev.filter((id) => id !== currentCard.id)
                : [...prev, currentCard.id]
            );
          }
          break;
        }
      }
    },
    [NOTE_CARD_MOCK.length, selectedCardIndex, isAnyCardEditing]
  );

  const handleCardHover = useCallback(
    (index: number) => {
      // Блокируем hover если редактируется любая карточка
      if (isAnyCardEditing) return;

      setIsKeyboardNavigation(false);
      setSelectedCardIndex(index);
    },
    [isAnyCardEditing]
  );

  const handleCardClick = useCallback(
    (cardId: number) => {
      // Если редактируется любая карточка, разрешаем только клик по редактируемой карточке
      if (isAnyCardEditing) {
        // Здесь можно добавить логику для закрытия редактирования
        return;
      }

      setSelectedCardIds((prev) =>
        prev.includes(cardId)
          ? prev.filter((id) => id !== cardId)
          : [...prev, cardId]
      );
    },
    [isAnyCardEditing]
  );

  const handleEditStateChange = useCallback((isEditing: boolean) => {
    setIsAnyCardEditing(isEditing);
  }, []);

  const scrollToSelectedCard = useCallback(
    (index: number) => {
      // Скроллим только при клавиатурной навигации
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

  return (
    <div
      className={cn(styles.home, {
        [styles.home_keyboardNavigation]: isKeyboardNavigation,
        [styles.home_editing]: isAnyCardEditing,
      })}
    >
      <div className={styles.home__noteCardContainer}>
        {NOTE_CARD_MOCK.map((item, index) => (
          <NoteCard
            key={item.id}
            {...item}
            image={item.image}
            isSelected={index === selectedCardIndex}
            isCardSelected={selectedCardIds.includes(item.id)}
            onCardHover={handleCardHover}
            onCardClick={handleCardClick}
            cardIndex={index}
            cardRef={(el) => (cardRefs.current[index] = el)}
            onEditStateChange={handleEditStateChange}
          />
        ))}
      </div>
    </div>
  );
}
