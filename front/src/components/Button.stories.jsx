import Button from "./Button";

const backgroundGradient = {
  colors: [{ color: "green" }, { color: "red", deg: "20%" }],
  sideCorner: "90deg in oklab",
};

const icon = {
  topIcon: { color: "red", name: "fa-heart", type: "fas", style: {} },
  bottomIcon: { color: "white" },
  size: "2",
  opacity: "100%",
};

export default {
  component: Button,
};

export const ButtonComponentGradientBackgroundWthoutIcon = {
  args: {
    backgroundColor: backgroundGradient,
    btnText: "button with grdient background",
  },
  tags: ["autodocs"],
};

export const ButtonComponentWithoutIcon = {
  args: {
    backgroundColor: "blue",
    btnText: "button with solid background without icon",
    outline: false,
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

export const ButtonComponentWithIconBeforeText = {
  args: {
    backgroundColor: "blue",
    btnText: "button with icon before text",
    outline: false,
    icon: icon,
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

export const ButtonComponentWithIconAfterText = {
  args: {
    backgroundColor: "blue",
    btnText: "button with icon after text",
    outline: false,
    icon: icon,
    iconPosition: false,
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

function greeting() {
  alert("good morning!");
}

export const ButtonComponentWithFunction = {
  args: {
    backgroundColor: "blue",
    btnText: "Click here to get a greeting",
    onClickFunction: () => greeting(),
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
