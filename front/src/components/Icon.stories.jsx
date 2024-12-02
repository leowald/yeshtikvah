import Icon from "./Icon.jsx";

const topIcon = {
  color: "green",
  name: "fa-house",
  type: "fas",
};

const bottomIcon = {
  color: "pink",
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
