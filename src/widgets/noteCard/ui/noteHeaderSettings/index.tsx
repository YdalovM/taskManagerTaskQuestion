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
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div className={styles.settings} onClick={handleClick}>
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
