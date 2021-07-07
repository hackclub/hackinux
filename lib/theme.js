import base_theme from "@hackclub/theme";

const extended_theme = {
  ...base_theme,
};

/**Disable dark mode */
extended_theme.useColorSchemeMediaQuery = false;
extended_theme.colors.modes = {};

export default extended_theme;
