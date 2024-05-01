import { extendTheme } from "@chakra-ui/react";
import { tableTheme } from "../components/Table.jsx";

const theme = extendTheme({
  styles: {
    global: {
      "::selection": {
        backgroundColor: "#d73f09",
        color: "#ffffff",
      },
      /* For Firefox */
      "::-moz-selection": {
        backgroundColor: "#d73f09",
        color: "#ffffff",
      },
      body: {
        backgroundColor: "#ffffff",
      },
    },
  },
  colors: {
    osu: {
      orange: "#d73f09",
      darkOrange: "#b83607",
      black: "#000000",
      white: "#ffffff",
    },
    greyscale: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif",
  },
  components: {
    Table: tableTheme,
  },
});

export default theme;
