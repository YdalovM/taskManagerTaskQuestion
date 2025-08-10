import type { INoteCard } from "../../model/types";
import styles from "./index.module.scss";

export default function NoteCardFullImage({
  image,
  description,
}: INoteCard<"fullImage">) {
  return (
    <div className={styles.noteCard__fullImage}>
      {image}
      <div className={styles.noteCard__fullImageDescription}>{description}</div>
    </div>
  );
}
