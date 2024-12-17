/** @type { import('@storybook/react').Preview } */

import "bootstrap/dist/css/bootstrap.min.css";

import "../src/App.scss";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
