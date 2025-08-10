import { useState } from "react";
import styles from "./index.module.scss";
import { NoteCardLayout } from "./ui";
import { NOTE_CARD_BY_TYPE } from "./config";
import type { INoteCardFull } from "./model";
import { validateIndicator } from "./util/validateIndicator";

export default function NoteCard({
  description: initialDescription,
  type,
  image,
  idication: initialIdication,
}: INoteCardFull) {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(initialDescription);
  const [idication, setIdication] = useState(initialIdication);

  const NoteCardComponent = NOTE_CARD_BY_TYPE[type];

  const handleIndicatorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdication(validateIndicator(e.target.value));
  };

  return (
    <>
      <NoteCardLayout onClick={() => setIsEdit(true)}>
        <NoteCardComponent
          description={description}
          image={image}
          idication={idication}
        />
      </NoteCardLayout>

      {/* TODO: блок для тестов первого задания, открывается по клику на карточку*/}
      {isEdit && (
        <>
          <div className={styles.noteCard__inputContainer}>
            <textarea
              rows={1}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.noteCard__textarea}
            />
            <input
              value={idication}
              onChange={handleIndicatorChange}
              className={styles.noteCard__input}
              placeholder="Индикатор"
              maxLength={4}
            />
            <button
              onClick={() => setIsEdit(false)}
              className={styles.noteCard__button}
            >
              Save
            </button>
          </div>
        </>
      )}
    </>
  );
}
