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
  args: { topIcon: topIcon, bottomIcon: bottomIcon, size: "3" },
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export const FAIconComponent = {
  args: { topIcon: topIcon, size: "3" },
  argTypes: {
    size: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};
