import PrimaryButton from "./PrimaryButton.jsx";
import { MemoryRouter } from "react-router-dom";

export default {
  component: PrimaryButton,
  tags: ["autodocs"],
};

export const PrimaryButtonComponent = () => {
  return (
    <MemoryRouter>
      <PrimaryButton></PrimaryButton>
    </MemoryRouter>
  );
};
