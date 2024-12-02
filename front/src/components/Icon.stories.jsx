import Icon from "./Icon.jsx";

const topIcon = {
  color: "green",
  name: "fa-house",
  type: "fas",
};

const bottomIcon = {
  color: "pink",
  style: { border: "1px solid #FF7888", borderRadius: "50%" },
};

export default {
  component: Icon,
};

export const FALayeredIconComponent = {
  args: { topIcon: topIcon, bottomIcon: bottomIcon, size: "3x" },
  tags: ["autodocs"],
};

export const FAIconComponent = {
  args: { topIcon: topIcon, size: "3x" },
  tags: ["autodocs"],
};
