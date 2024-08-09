import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
    colors: {
      primary: "#623E29",
      secondary: "#F3F1EC",
      tertiary: "#FFFFFF",
      ...colors,
    },
  },
  plugins: [],
} satisfies Config;
