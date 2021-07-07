import { ThemeProvider } from "theme-ui";
import state from "../lib/theme";

function MyApp({ Component, pageProps }) {
  return;
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>;
}

export default MyApp;
