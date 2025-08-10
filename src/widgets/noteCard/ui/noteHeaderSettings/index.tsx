import ThreeDots from "../../../../assets/svgs/threeDots.svg?react";
import styles from "./index.module.scss";
import cn from "classnames";

export default function NoteHeaderSettings({
  isImage = false,
}: {
  isImage?: boolean;
}) {
  return (
    <div className={styles.settings}>
      <button
        className={cn(styles.settingsButton, {
          [styles.settingsButton_image]: isImage,
        })}
      >
        <ThreeDots />
      </button>
    </div>
  );
}
