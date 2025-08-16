import ThreeDots from "../../../../assets/svgs/threeDots.svg?react";
import styles from "./index.module.scss";
import cn from "classnames";

export default function NoteHeaderSettings({
  isImage = false,
  onClick,
}: {
  isImage?: boolean;
  onClick: () => void;
}) {
  return (
    <div className={styles.settings} onClick={onClick}>
      <span
        className={cn(styles.settingsButton, {
          [styles.settingsButton_image]: isImage,
        })}
      >
        <ThreeDots />
      </span>
    </div>
  );
}
