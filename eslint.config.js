import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { globals: globals.browser },

  ignores: ["**/*.config.js"],
},
  pluginJs.configs.recommended,
  pluginReactConfig,
];
