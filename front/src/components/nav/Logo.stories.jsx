import Logo from "./Logo.jsx";
import { MemoryRouter } from "react-router-dom";

export default {
  component: Logo,
  args: { size: "sm" },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export const LogoComponent = () => {
  return (
    <MemoryRouter>
      <Logo size={"sm"}></Logo>
    </MemoryRouter>
  );
};
