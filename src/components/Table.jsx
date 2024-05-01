import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  tbody: {
    tr: {
      backgroundColor: "greyscale.50",
    },
    td: {
      borderColor: "greyscale.200 !important",
      maxW: "400px",
      wordWrap: "break-word",
      whiteSpace: "normal",
      minWidth: "120px",
      padding: "10px",
    },
  },
  thead: {
    backgroundColor: "greyscale.100",
    th: {
      borderColor: "greyscale.300 !important",
      padding: "10px",
      fontFamily: "sans-serif",
      color: "greyscale.900",
    },
  },
});

export const tableTheme = defineMultiStyleConfig({ baseStyle });
