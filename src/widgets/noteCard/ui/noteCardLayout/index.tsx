import type { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

interface NoteCardLayoutProps
  extends PropsWithChildren<{
    onClick?: () => void;
    isEdit?: boolean;
    gradientBorderType?: "none" | "simple" | "complex" | "pseudo";
  }> {}

export default function NoteCardLayout({
  children,
  onClick = () => {},
  isEdit,
  gradientBorderType = "none",
}: NoteCardLayoutProps) {
  return (
    <div
      className={cn(styles.noteCardLayout, {
        [styles.noteCardLayout_edit]: isEdit,
        [styles.noteCardLayout_gradientBorder]:
          isEdit && gradientBorderType === "simple",
        [styles.noteCardLayout_gradientBorderComplex]:
          isEdit && gradientBorderType === "complex",
        [styles.noteCardLayout_gradientBorderPseudo]:
          isEdit && gradientBorderType === "pseudo",
      })}
      onClick={onClick}
    >
      <div className={styles.noteCardLayout__content}>{children}</div>
    </div>
  );
}
