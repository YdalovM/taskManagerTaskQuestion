import type { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import cn from "classnames";

export default function NoteCardLayout({
  children,
  onClick,
  isEdit,
}: PropsWithChildren<{
  onClick: () => void;
  isEdit?: boolean;
}>) {
  return (
    <div
      className={cn(styles.noteCardLayout, {
        [styles.noteCardLayout_edit]: isEdit,
      })}
      onClick={onClick}
    >
      <div className={styles.noteCardLayout__content}>{children}</div>
    </div>
  );
}
