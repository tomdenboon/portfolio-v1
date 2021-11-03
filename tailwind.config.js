const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        green: colors.green,
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        "fade-in-down": {
          "0%": {
            transform: "translateY(-20px)",
          },
          "1%": {
            opacity: "0.05",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            transform: "translateY(20px)",
          },
          "1%": {
            opacity: "0.05",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            transform: "translateX(-20px)",
          },
          "1%": {
            opacity: "0.05",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            transform: "translateX(20px)",
          },
          "1%": {
            opacity: "0.05",
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in both",
        "fade-in-delay-800": "fade-in 0.3s ease-in 0.8s both",
        "fade-in-down-delay-100": "fade-in-down 0.3s ease-in 0.1s both",
        "fade-in-down-delay-200": "fade-in-down 0.3s ease-in 0.2s both",
        "fade-in-down-delay-300": "fade-in-down 0.3s ease-in 0.3s both",
        "fade-in-down-delay-400": "fade-in-down 0.3s ease-in 0.4s both",
        "fade-in-down-delay-500": "fade-in-down 0.3s ease-in 0.5s both",
        "fade-in-down-delay-600": "fade-in-down 0.3s ease-in 0.6s both",
        "fade-in-down-delay-700": "fade-in-down 0.3s ease-in 0.7s both",
        "fade-in-down-delay-800": "fade-in-down 0.3s ease-in 0.8s both",
        "fade-in-down-delay-900": "fade-in-down 0.3s ease-in 0.9s both",
        "fade-in-up-delay-100": "fade-in-up 0.3s ease-in 0.1s both",
        "fade-in-up-delay-200": "fade-in-up 0.3s ease-in 0.2s both",
        "fade-in-up-delay-300": "fade-in-up 0.3s ease-in 0.3s both",
        "fade-in-up-delay-400": "fade-in-up 0.3s ease-in 0.4s both",
        "fade-in-up-delay-500": "fade-in-up 0.3s ease-in 0.5s both",
        "fade-in-up-delay-600": "fade-in-up 0.3s ease-in 0.6s both",
        "fade-in-up-delay-700": "fade-in-up 0.3s ease-in 0.7s both",
        "fade-in-up-delay-800": "fade-in-up 0.3s ease-in 0.8s both",
        "fade-in-up-delay-900": "fade-in-up 0.3s ease-in 0.9s both",
        "fade-in-up-delay-1000": "fade-in-up 0.3s ease-in 1.0s both",
        "fade-in-up-delay-1100": "fade-in-up 0.3s ease-in 1.1s both",
        "fade-in-left-delay-600": "fade-in-left 0.3s ease-in 0.6s both",
        "fade-in-right-delay-100": "fade-in-right 0.3s ease-in 0.1s both",
        "fade-in-right-delay-200": "fade-in-right 0.3s ease-in 0.2s both",
        "fade-in-right-delay-300": "fade-in-right 0.3s ease-in 0.3s both",
        "fade-in-right-delay-400": "fade-in-right 0.3s ease-in 0.4s both",
        "fade-in-right-delay-700": "fade-in-right 0.3s ease-in 0.7s both",
        "fade-in-right-delay-800": "fade-in-right 0.3s ease-in 0.8s both",
        "fade-in-right-delay-900": "fade-in-right 0.3s ease-in 0.9s both",
      },
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
      opacity: ["active"],
      textColor: ["active"],
      translate: ["group-hover"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [],
};
