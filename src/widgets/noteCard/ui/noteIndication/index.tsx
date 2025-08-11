import cn from "classnames";
import styles from "./index.module.scss";

export default function NoteIndication({
  counterRef,
  idication,
  isImage = false,
}: {
  counterRef: React.RefObject<HTMLDivElement | null>;
  idication: string;
  isImage?: boolean;
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
          })}
        >
          {idication}
        </div>
      )}
    </>
  );
}
