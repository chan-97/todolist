const calcRem = (size: number): string => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
};

const colors = {
  beige: "#fff5eb",
  mint: "#deedf0",
  darkOrange: "#f4c7ab",
  darkGreen: "#b2b8a3",
};

export const theme = {
  fontSizes,
  colors,
};
