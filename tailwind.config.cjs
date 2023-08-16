/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
     
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        // custom
        primary: "#ae0c06",
        secondary: "#1b1b1b",
        "dark-100": "#323232",
        "dark-200": "#303233",
        "dark-300": "#27272a",
        "dark-400": "#262830",
        "dark-500": "#222222",
        "dark-600": "#101010",
        light: "#f5f5f6",
        highLight: "#ae0c06db",

        "activity-bg": "var(--activity-bg)",
        "editor-fg": "var(--editor-fg)",
        "editor-bg": "var(--editor-bg)",
        "explorer-fg": "var(--explorer-fg)",
        "explorer-bg": "var(--explorer-bg)",
        "sidebar-fg": "var(--sidebar-fg)",
        "sidebar-bg": "var(--sidebar-bg)",
        "off-white": "var(--off-white)",
      },
     
    },
    
  },
  plugins: [],
  safelist: [
    {
      pattern: /grid-cols-/,
      variants: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    },
    {
      pattern: /bg-(purple|indigo|green|blue)-(100|200|300)/,
    },
  ],
};
