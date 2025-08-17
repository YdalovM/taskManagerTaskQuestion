export const getTypeIcon = (
  editType: "text" | "leftImage" | "fullImage",
  positionImage: "TOP" | "BOTTOM"
) => {
  if (editType === "fullImage" && positionImage === "TOP") {
    return "fullImageTop";
  } else if (editType === "fullImage" && positionImage === "BOTTOM") {
    return "fullImageBottom";
  }
  return editType;
};
