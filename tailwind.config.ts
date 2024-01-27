import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        colorButton: "#3A3B3C",
        colorDanger: "#fe6854",
        colorTextSecondary: "#B0B3B8",
        colorFontPrimary: "#6c7983",
        colorTextPrimary: "#FFFFFF",
        colorTextLight: "#f8f8f8",
        colorbackground: "#FBFBFD",
        colorGradient: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
        colorGreenDark: "#27AE60",
        colorGreenLight: "#dbe1e8",
        activeNavLink: "rgba(230,230,230, .87)",
        activeNavLinkHover: "#C5C5C5",
        colorPrimary: "#7263F3",
        colorPrimary2: "#705DF2",
        colorGreyDark: "#131313",
        colorGrey0: "#f8f8f8",
        colorGrey1: "#dbe1e8",
        colorGrey2: "#b2becd",
        colorGrey3: "#6c7983",
        colorGrey4: "#454e56",
        colorGrey5: "#2a2e35",
        colorGrey6: "#12181b",
        colorWhite: "#fff",
        colorIcons: "#999999",
        colorIcons2: "#181818",
        colorIcons3: "rgba(249,249,249, 0.08)",
        colorIcons4: "rgba(0,0,0, 0.3)",
        // Dark mode themes
        colorButtonDark: "#3A3B3C",
        colorDangerDark: "#fe6854",
        colorFontPrimaryDark: "#e5e7eb",
        colorTextSecondaryDark: "#B0B3B8",
        colorTextPrimaryDark: "#FFFFFF",
        colorTextLightDark: "#f8f8f8",
        colorbackgroundDark: "#FBFBFD",
        activeNavLinkDark: "rgba(249,249,249, 0.08)",
        activeNavLinkHoverDark: "rgba(249,249,249, 0.03)",
        colorIconsDark: "rgba(249,249,249, 0.35)",
        colorIcons2Dark: "rgba(249,249,249, 0.75)",
        colorIcons3Dark: "rgba(249,249,249, 0.08)",
        colorIcons4Dark: "rgba(0,0,0, 0.3)",
      },
      backgroundColor: {
        colorBg: "#fff",
        colorBg2: "#F9F9F9",
        colorBg3: "#EDEDED",
        colorBg4: "#1A1A1A",
        colorBgDark: "#252525",
        colorBg2Dark: "#212121",
        colorBg3Dark: "#181818",
        colorBg4Dark: "#1A1A1A",
        activeNavLink: "rgba(249,249,249, 0.08)",
        activeNavLinkHover: "rgba(249,249,249, 0.03)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        buttonGradient1:
          "linear-gradient(110.42deg, rgba(107, 190, 146, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
        buttonGradient2:
          "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
        buttonGradient3:
          "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
        buttonGradient4:
          "linear-gradient(110.42deg, rgba(168, 85, 247, 0.7) 29.2%, rgba(245, 102, 146, 0.7) 63.56%)",
        buttonGradient5:
          "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
        buttonGradient6:
          "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
        buttonGradient7:
          "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
        buttonGradient8:
          "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
        buttonGradient9:
          "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
        buttonGradient10:
          "linear-gradient(110.42deg, rgba(235, 87, 87, 0.7) 29.2%, rgba(189, 68, 166, 0.7) 53.82%, rgba(247, 85, 143, 0.1) 63.56%)",
        buttonGradient11:
          "linear-gradient(110.42deg, rgba(25, 151, 222, 0.7) 29.2%, rgba(168, 85, 247, 0.7) 63.56%)",
        buttonGradient12:
          "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(247, 104, 85, 0.7) 63.56%)",
        buttonGradient13:
          "linear-gradient(110.42deg, rgba(226, 195, 33, 0.7) 29.2%, rgba(99, 3, 255, 0.7) 63.56%)",
        buttonGradient14:
          "linear-gradient(110.42deg, rgba(41, 25, 222, 0.7) 29.2%, rgba(235, 87, 87, 0.7) 63.56%)",
        shadow1: "4px 4px 84px rgba(16, 10, 86, 0.04)",
        shadow2: "0px 48px 77px rgba(8, 18, 69, 0.07)",
        shadow3: "0 14px 40px rgb(0 0 0 / 25%)",
        shadow7: "0px 48px 77px rgba(8, 18, 69, 0.16)",
        shadow5: "0px 4px 0px rgba(249,249,249, 0.35)",
        shadow6:
          "0px 6px 20px rgba(0, 0, 0, 0.15), 0px -3px 20px rgba(0, 0, 0, 0.1)",

        // Dark themes
        colorGradientDark: "linear-gradient(110.42deg, #CF57A3 29.2%, #4731B6 63.56%)",
      },
      borderColor: {
        borderColor: "rgba(249,249,249, 0.08)",
        borderColor2: "rgba(249,249,249, 0.08)",
      },
      fontSize: {
        fontSmall: "14px",
        fontSmall2: "15px",
      }
    },
  },
  plugins: [],
}
export default config
