// postcss.config.js
import tailwind from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import prefixSelector from "postcss-prefix-selector";

export default {
  plugins: [
    tailwind,
    autoprefixer,
    prefixSelector({
      prefix: ".my-lib",
      transform: (prefix, selector, filepath) => {
        if (filepath.includes("src/css/input.css")) {
          return `${prefix} ${selector}`;
        }
        return selector;
      },
    }),
  ],
};
