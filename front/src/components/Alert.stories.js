import Alert from "./Alert";

export default {
  title: "Example/Alert",
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    type: "secondary",
    children: <p>This text is displyed in the Alert box</p>,
    flex: true,
  },
};

export const AlertComponent = {};
