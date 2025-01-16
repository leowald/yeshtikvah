import SecondaryButton from "./PrimaryButton.jsx";
import { MemoryRouter } from "react-router-dom";

export default {
  component: SecondaryButton,
  tags: ["autodocs"],
};

export const SecondaryButtonComponent = () => {
  return (
    <MemoryRouter>
      <SecondaryButton></SecondaryButton>
    </MemoryRouter>
  );
};
