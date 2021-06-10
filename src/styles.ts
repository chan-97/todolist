const calcRem = (size: number): string => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(14),
  base: calcRem(16),
  standard: calcRem(18),
  title: calcRem(30),
};

const colors = {
  blue: "#0269a4",
};

export const theme = {
  fontSizes,
  colors,
};
