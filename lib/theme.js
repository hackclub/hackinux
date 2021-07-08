import base_theme from "@hackclub/theme";

const extended_theme = {
  ...base_theme,
  subt: {
    color: "muted",
    my: [0],
  },
  heading: {
    ...base_theme?.heading,
    fontSize: [4, 5],
    my: [0],
  },
  para: {
    ...base_theme?.para,
    fontSize: [1, 2],
  },
  wavy: {
    ...base_theme?.wavy,
    textDecorationLine: "underline",
    textDecorationStyle: "wavy",
  },
  cont: {
    ...base_theme?.cont,
    mt: [4, 5],
  },
};

// disabling horizontal content overflow
(extended_theme.styles.root = {
  ...base_theme?.styles?.root,
  overflowX: "hidden",
}),
  /**Disable dark mode */
  (extended_theme.useColorSchemeMediaQuery = false);
extended_theme.colors.modes = {};

export default extended_theme;
