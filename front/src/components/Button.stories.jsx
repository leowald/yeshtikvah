import Button from "./Button";

const backgroundGradient = {
  colors: [{ color: "green" }, { color: "red", deg: "20%" }],
  sideCorner: "90deg in oklab",
};

const icon = {
  topIcon: { color: "red", name: "fa-heart", type: "fas" },
  size: "3",
  opacity: "100%",
};

export default {
  component: Button,
};

export const ButtonComponentGradientBackground = {
  args: { backgroundColor: backgroundGradient, btnText: "button text" },
  tags: ["autodocs"],
};

export const ButtonComponentSolidBackground = {
  args: {
    backgroundColor: "blue",
    size: "sm",
    btnText: "button text",
    outline: false,
    icon: icon,
    iconPosition: true,
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
