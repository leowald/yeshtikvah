import Card from "./Card.jsx";

const background = {
  colors: [{ color: "blue" }, { color: "red" }],
  sideCorner: "90deg in oklab",
};

export default {
  component: Card,
};

export const CardComponentGradientBackground = {
  args: { backgroundColor: background },
  tags: ["autodocs"],
};

export const CardComponentSolidBackground = {
  args: { backgroundColor: "green" },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
    },
  },
  tags: ["autodocs"],
};
