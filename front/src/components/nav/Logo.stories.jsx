import Logo from "./Logo.jsx";

export default {
  component: Logo,
};

export const LogoComponent = {
  args: { size: "sm" },

  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
  },
};
