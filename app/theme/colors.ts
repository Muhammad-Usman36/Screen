// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#DADDDD",
  neutral400: "#6C6C6C",
  neutral500: "#D4D4D4",
  neutral600: "#677789",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",
  primary100: "#A6FFFC",
  primary200: "#89FFFB",
  primary300: "#4DFFF8",
  primary400: "#03FFF6",
  primary500: "#00D6CE",
  secondary100: "#4836E8",
  secondary200: "#2C19D7",
  secondary300: "#2414B1",
  secondary400: "#1C0F88",
  secondary500: "#10094F",
  tertiary100: "#A397E9",
  tertiary200: "#8C7DE3",
  tertiary300: "#7664DE",
  tertiary400: "#392F8A",
  tertiary500: "#4830D3",
  accent100: "#6E61E0",
  accent200: "#4C3CD9",
  accent300: "#3727C6",
  accent400: "#2F21A8",
  accent500: "#22187A",
  angry100: "#F2D6CD",
  angry500: "red",
  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const;
export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
};