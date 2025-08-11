import TextVariantIcon from "../../../assets/svgs/textVariant.svg?react";
import ImageLeftIcon from "../../../assets/svgs/leftImage.svg?react";
import ImageTopIcon from "../../../assets/svgs/topImage.svg?react";
import ImageBottomIcon from "../../../assets/svgs/bottomImage.svg?react";

export const IconByTypeNote = ({ type }: { type: string }) => {
  switch (type) {
    case "leftImage":
      return <ImageLeftIcon />;
    case "fullImageTop":
      return <ImageTopIcon />;
    case "fullImageBottom":
      return <ImageBottomIcon />;
    default:
      return <TextVariantIcon />;
  }
};
