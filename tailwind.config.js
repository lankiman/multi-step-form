/** @type {import('tailwindcss').Config} */

const path = require("path");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "750px",
      lg: "900px",
      sm: "500px"
    },

    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      custom: ["Ubuntu", "sans-serif"]
    },
    fontWeight: {
      normal: 400,
      bold: 500,
      extrabold: 700
    },
    extend: {
      backgroundImage: {
        sidebarDesktop: `url('${path.resolve(
          __dirname,
          "src/assets/images/bg-sidebar-desktop.svg"
        )}')`,
        sidebarMobile: `url('${path.resolve(
          __dirname,
          "src/assets/images/bg-sidebar-mobile.svg"
        )}')`,
        arcade: `url('${path.resolve(
          __dirname,
          "src/assets/images/icon-arcade.svg"
        )}')`,
        advance: `url('${path.resolve(
          __dirname,
          "src/assets/images/icon-advanced.svg"
        )}')`,
        pro: `url('${path.resolve(
          __dirname,
          "src/assets/images/icon-pro.svg"
        )}')`
      },

      colors: {
        MarineBlue: "hsl(213, 96%, 18%)",
        PurplishBlue: "hsl(243, 100%, 62%)",
        PastelBlue: "hsl(228, 100%, 84%)",
        LightBlue: "hsl(206, 94%, 87%)",
        StrawberryRed: "hsl(354, 84%, 57%)",

        //neutrals

        CoolGray: "hsl(231, 11%, 63%)",
        LightGray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)"
      }
    },
    plugins: [require("daisyui")]
  }
};
