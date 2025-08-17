export const getTypeIcon = (
  editType: "text" | "leftImage" | "fullImage",
  positionImage: "TOP" | "BOTTOM"
): "text" | "leftImage" | "fullImage" | "fullImageTop" | "fullImageBottom" => {
  if (editType === "fullImage" && positionImage === "TOP") {
    return "fullImageTop";
  } else if (editType === "fullImage" && positionImage === "BOTTOM") {
    return "fullImageBottom";
  }
  return editType;
};
