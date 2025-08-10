export const validateIndicator = (value: string) => {
  const isValidInput = /^\+?[0-9]*$/.test(value);
  const isEmptyOrZero = value === "" || value === "0";

  return isValidInput
    ? isEmptyOrZero
      ? ""
      : value
    : value.replace(/[^0-9+]/g, "").replace(/(?!^)\+/g, "");
};
