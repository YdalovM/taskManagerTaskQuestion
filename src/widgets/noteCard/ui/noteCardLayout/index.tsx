import styles from "./index.module.scss";
import cn from "classnames";
import type { NoteCardLayoutProps } from "../../model";

export default function NoteCardLayout({
  children,
  onClick = () => {},
  isEdit,
  gradientBorderType = "none",
  isSelected = false,
  isCardSelected = false,
}: NoteCardLayoutProps) {
  return (
    <div
      className={cn(styles.noteCardLayout, {
        [styles.noteCardLayout_edit]: isEdit,
        [styles.noteCardLayout_gradientBorder]:
          isEdit && gradientBorderType === "simple",
        [styles.noteCardLayout_gradientBorderComplex]:
          isEdit && gradientBorderType === "complex",
        [styles.noteCardLayout_selected]: isSelected,
        [styles.noteCardLayout_cardSelected]: isCardSelected,
      })}
      onClick={onClick}
    >
      <div className={styles.noteCardLayout__content}>{children}</div>
    </div>
  );
}
