/** @type { import('@storybook/vue3').Preview } */

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

const preview = {
  parameters: {
    // Описывать здесь параметры, нужные по всему сторибуку, во всех компонентах и сторях
    backgrounds: {
      values: [
        { name: 'black', value: '#000' },
        { name: 'dark', value: '#222' },
        { name: 'light', value: '#ddd' },
        { name: 'white', value: '#fff' },
      ]
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS
    },
    layout: 'fullscreen',
  },
};

export default preview;
