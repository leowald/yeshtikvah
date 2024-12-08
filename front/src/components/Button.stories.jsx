import Button from "./Button";

const backgroundColor = {
  colors: [{ color: "green" }, { color: "red", deg: "20%" }],
  sideCorner: "90deg in oklab",
};

export default {
  component: Button,
};

export const ButtonComponentGradientBackground = {
  args: { backgroundColor: background },
  tags: ["autodocs"],
};

export const ButtonComponentSolidBackground = {
  args: { backgroundColor: "blue" },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },
  tags: ["autodocs"],
};
