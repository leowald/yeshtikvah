import Button from "./Button";

const backgroundGradient = {
  colors: [{ color: "green" }, { color: "red", deg: "20%" }],
  sideCorner: "90deg in oklab",
};

export default {
  component: Button,
};

export const ButtonComponentGradientBackground = {
  args: { backgroundColor: backgroundGradient },
  tags: ["autodocs"],
};

export const ButtonComponentSolidBackground = {
  args: {
    backgroundColor: "blue",
    size: "sm",
    btnText: "button text",
    outline: false,
  },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },

    tags: ["autodocs"],
  },
};
