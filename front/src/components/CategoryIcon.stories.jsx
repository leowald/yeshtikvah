import CategoryIcon from "./CategoryIcon.jsx";

const imageIcon1 = {
  src: "https://avatars.githubusercontent.com/u/52691663",
  alt: "this is a link to  an external image",
  title: "this is an image",
};

const imageIcon2 = {
  src: "Pic1.png",
  alt: "this is a local image",
  title: "this is an image",
};

export default {
  component: CategoryIcon,
};

export const ExternalImageIcon = {
  args: { imageIcon: imageIcon1, backgroundColor: "green" },
  argTypes: {
    backgroundColor: {
      options: ["orange", "blue", "green"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export const LocalImageIcon = {
  args: { imageIcon: imageIcon2, backgroundColor: "red" },
  argTypes: {
    backgroundColor: {
      options: ["pink", "red", "purple"],
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};
