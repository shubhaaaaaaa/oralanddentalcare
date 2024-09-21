import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans: ['"Just Sans"', 'sans-serif'],
      },
      colors:{
        primary:{
          DEFAULT: "#6be3cb",
          '100': "#e9fbf8"
        },
        secondary:{
          DEFAULT: "#72cdf7"
        },
        white:{
          DEFAULT: "#fefcfd"
        },
        blue:{
          DEFAULT: "#0479af"
        },
        darkblue:{
          DEFAULT: "#024462"
        },
        darkgray:{
          DEFAULT: "#384646"
        },
      },
    },

    screens:{
      'sm':'310px',
      'md':'481px',
      'lg':'769px',
      'xl':'1280px',
      '2xl':'1440px',
      '3xl':'1800px',
    },

  },
  plugins: [],
  enabled: process.env.NODE_ENV === "development"
};
export default config;
