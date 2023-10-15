import {nextui} from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [ nextui({
    addCommonColors: true,
    defaultTheme: "mytheme", // default theme from the themes object
    defaultExtendTheme: "mytheme", // default theme to extend on custom themes
    layout: {}, // common layout tokens (applied to all themes)
    themes: {
      dark: {
        // ...
        colors: {
          white: "#FFFFFF",
          black: "#000000",
          focus: "#BEF264",
          blue: {
            50: "#e6f1fe",
            100: "#cce3fd",
            200: "#99c7fb",
            300: "#66aaf9",
            400: "#338ef7",
            500: "#006FEE",
            600: "#005bc4",
            700: "#004493",
            800: "#002e62",
            900: "#001731",
          },
          button: {
            foreground: "#FFFFFF", // or 50 to 900 DEFAULT,
            DEFAULT: "#FF793F",
          },
        },
      },
      "mytheme": {
        extend: "dark",
        screens: {
          sm: "640px",
          md: "772px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
        colors: {
          background: "#81C0D7", // or DEFAULT
          foreground: "#FCFCFF", // or 50 to 900 DEFAULT
          "primary": {
            "100": "#E4F5E6",
            "200": "#CAEBD2",
            "300": "#9BC3A9",
            "400": "#658875",
            "500": "#263A31",
            "600": "#1B312A",
            "700": "#132924",
            "800": "#0C211E",
            "900": "#071B1A",

            foreground: "#FFFFFF", // or 50 to 900 DEFAULT,
            DEFAULT: "#FF793F",
          },
          "success": {
            "100": "#EAF8CD",
            "200": "#D2F29D",
            "300": "#A8D967",
            "400": "#7AB43D",
            "500": "#458210",
            "600": "#346F0B",
            "700": "#265D08",
            "800": "#1A4B05",
            "900": "#123E03"
          },
          "info": {
            "100": "#C7F9EF",
            "200": "#92F4E8",
            "300": "#58DED8",
            "400": "#2FB7BD",
            "500": "#008091",
            "600": "#00647C",
            "700": "#004B68",
            "800": "#003654",
            "900": "#002745"
          },
          "warning": {
            "100": "#FAEDC8",
            "200": "#F6D794",
            "300": "#E3B35C",
            "400": "#C98C33",
            "500": "#A55B01",
            "600": "#8D4700",
            "700": "#763600",
            "800": "#5F2700",
            "900": "#4F1D00"
          },
          "danger": {
            "100": "#F9CED6",
            "200": "#F49FB7",
            "300": "#DE6A97",
            "400": "#BE417E",
            "500": "#93135E",
            "600": "#7E0D5B",
            "700": "#690955",
            "800": "#55064C",
            "900": "#460345",
          },
        },
        layout: {
          boxShadow: {
            // shadow-small
            small:
              "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-medium
            medium:
              "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-large
            large:
              "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
          },
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "1px",
            medium: "2px",
            large: "3px",
          },
        },
      },
    }
  }),
],
}
