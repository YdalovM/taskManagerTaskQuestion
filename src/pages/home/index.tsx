import { NoteCard } from "../../widgets";
import { leftImageNoteCards, textNoteCards } from "./util";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__noteCardContainer}>
        {textNoteCards.map((item) => (
          <NoteCard key={item.id} {...item} />
        ))}
      </div>

      <div className={styles.home__noteCardContainer}>
        {leftImageNoteCards.map((item) => (
          <NoteCard key={item.id} {...item} image={item.image} />
        ))}
      </div>
    </div>
  );
}
