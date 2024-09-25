import Button from "./Button";

export default {
  component: Button,
  args: { label: "Test", size: "large" },
  argTypes: {
    onClick: { action: "Click fired" },

    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    backgroundColor: {
      control: { type: "color" },
    },
  },
  tags: ["autodocs"],
};

export const ButtonComponent = {};
