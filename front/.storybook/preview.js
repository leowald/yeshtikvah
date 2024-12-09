/** @type { import('@storybook/react').Preview } */

import "bootstrap/dist/css/bootstrap.min.css";
import "!style-loader!css-loader!sass-loader!../src/styles/style.scss";
import "!style-loader!css-loader!../node_modules/@fortawesome/fontawesome-free/css/all.css";

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
