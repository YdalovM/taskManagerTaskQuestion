import type { PropsWithChildren } from "react";
import styles from "./index.module.scss";
import ThreeDots from "../../../../assets/svgs/threeDots.svg?react";

export default function NoteCardLayout({
  children,
  onClick,
}: PropsWithChildren<{
  onClick: () => void;
}>) {
  return (
    <div className={styles.noteCardLayout} onClick={onClick}>
      <div className={styles.noteCardLayout__settings}>
        <button className={styles.noteCardLayout__settingsButton}>
          <ThreeDots />
        </button>
      </div>
      <div className={styles.noteCardLayout__content}>{children}</div>
    </div>
  );
}
