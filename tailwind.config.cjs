const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: '#50FFFF',
          secondary: '#EAD2AC',
          "base-100": '#363637'
        },
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: '#50FFFF',
          secondary: '#EAD2AC',
          "base-100": '#363637'
        }
      }
    ]
  },

  plugins: [require('daisyui')],
};

module.exports = config;
