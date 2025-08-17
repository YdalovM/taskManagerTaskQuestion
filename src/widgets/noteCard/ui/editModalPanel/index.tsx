import styles from "./index.module.scss";
import XMark from "../../../../assets/svgs/xMark.svg?react";
import ArrowIcon from "../../../../assets/svgs/arrow.svg?react";
import cn from "classnames";
import { IconByTypeNote } from "../../util";
import { useState, useEffect } from "react";
import type { IEditModalPanelProps } from "../../model/";

export const EditModalPanel = ({
  setIsEdit,
  setType,
  setEditingDescription,
  setEditType,
  type,
  editingDescription,
  editType,
  setIsEditingType,
  typeIcon,
  isEditingType,
  setPositionImage,
  positionImage,
  description,
  setDescription,
  setPositionImageFinal,
  positionImageFinal,
}: IEditModalPanelProps) => {
  const [initialType, setInitialType] = useState(type);

  useEffect(() => {
    setInitialType(type);
  }, [type, positionImageFinal]);

  const handleSave = () => {
    setIsEdit(false);
    setDescription(editingDescription);
    setInitialType(editType);
    setType(editType);
    setPositionImageFinal(positionImage);
  };

  const handleCancelEdit = () => {
    setIsEdit(false);
    setEditingDescription(description);
    setEditType(initialType);
    setPositionImage(positionImageFinal);
  };

  const handleChangeType = (
    type: "text" | "leftImage" | "fullImage",
    positionImage?: "TOP" | "BOTTOM"
  ) => {
    setEditType(type);
    setPositionImage(positionImage || "TOP");
    setIsEditingType(false);
  };

  return (
    <>
      <div className={styles.editModalPanel__editContainer}>
        <XMark
          onClick={handleCancelEdit}
          className={styles.editModalPanel__editButtonClose}
        />
        <div className={styles.editModalPanel__editButtonContainer}>
          <button
            className={cn(styles.editModalPanel__editButton, {
              [styles.editModalPanel__editButton__leftImage]:
                editType === "leftImage",
            })}
            onClick={() => setIsEditingType(!isEditingType)}
          >
            <IconByTypeNote type={typeIcon} />
          </button>
          <button
            className={styles.editModalPanel__editButtonSave}
            onClick={handleSave}
          >
            <ArrowIcon />
          </button>
        </div>
      </div>
      {isEditingType && (
        <div className={styles.editModalPanel__editType}>
          <button
            onClick={() => handleChangeType("text")}
            className={styles.editModalPanel__editButtonType}
          >
            <IconByTypeNote type="text" />
          </button>
          <button
            onClick={() => handleChangeType("fullImage", "BOTTOM")}
            className={styles.editModalPanel__editButtonType}
          >
            <IconByTypeNote type="fullImageBottom" />
          </button>
          <button
            onClick={() => handleChangeType("fullImage", "TOP")}
            className={styles.editModalPanel__editButtonType}
          >
            <IconByTypeNote type="fullImageTop" />
          </button>
          <button
            onClick={() => handleChangeType("leftImage")}
            className={styles.editModalPanel__editButtonType}
          >
            <IconByTypeNote type="leftImage" />
          </button>
        </div>
      )}
    </>
  );
};
