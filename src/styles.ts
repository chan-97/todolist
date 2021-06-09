const calcRem = (size: number): string => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  title: calcRem(30),
};

const colors = {
  gray: "#E8E9EB",
  mint: "#deedf0",
};

export const theme = {
  fontSizes,
  colors,
};
