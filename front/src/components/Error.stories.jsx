import Error from "./Error";

export default {
  component: Error,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    errText: "This error message is displayed in the Error box",
  },
};

export const ErrorComponent = {};
