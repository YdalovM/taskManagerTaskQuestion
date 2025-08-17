import { NoteCard } from "../../widgets";
import cn from "classnames";
import styles from "./index.module.scss";
import { useCardNavigation } from "./util";

export default function Home() {
  const {
    isKeyboardNavigation,
    isAnyCardEditing,
    cardRefs,
    cards,
    handleCardHover,
    handleCardClick,
    handleEditStateChange,
  } = useCardNavigation();

  return (
    <div
      className={cn(styles.home, {
        [styles.home_keyboardNavigation]: isKeyboardNavigation,
        [styles.home_editing]: isAnyCardEditing,
      })}
    >
      <div className={styles.home__noteCardContainer}>
        {Object.values(cards).map((item, index) => (
          <NoteCard
            key={item.id}
            id={item.id}
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
