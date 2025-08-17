import cn from "classnames";
import styles from "./index.module.scss";

export default function NoteIndication({
  counterRef,
  idication,
  isImage = false,
  isSelected = false,
  isCardSelected = false,
}: {
  counterRef: React.RefObject<HTMLDivElement | null>;
  idication: string;
  isImage?: boolean;
  isSelected?: boolean;
  isCardSelected?: boolean;
}) {
  const isNewPosts = idication.includes("+");
  const isIndication =
    Boolean(idication) &&
    idication !== "0" &&
    idication !== "+0" &&
    idication !== "+";

  return (
    <>
      {isIndication && (
        <div
          ref={counterRef}
          className={cn(styles.counter, {
            [styles.counter_newPosts]: isNewPosts,
            [styles.counter_image]: isImage,
            [styles.counter_selected]: isSelected && !isNewPosts,
            [styles.counter_cardSelected]: isCardSelected && !isNewPosts,
          })}
        >
          {idication}
        </div>
      )}
    </>
  );
}
