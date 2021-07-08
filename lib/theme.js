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
};

/**Disable dark mode */
extended_theme.useColorSchemeMediaQuery = false;
extended_theme.colors.modes = {};

export default extended_theme;
