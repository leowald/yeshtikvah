import Card from "./Card.jsx";


const background={
  colors: [
  { color: "#EBB011", deg: "0%" },
  { color: "#ED861D", deg: "99.48%" },
  ],
  sideCorner: "180deg",
  }

export default {
    component: Card,
  };

  
  export const CardComponentGradientBackground = {
    args: { backgroundColor: background, text: "Testing card component with gradient as background color." },
    tags: ["autodocs"],
  };

  export const CardComponentSolidBackground = {
    args: { backgroundColor: "green", text: "Testing card component with solid color as background color." },
    argTypes: {
      backgroundColor: {
        control: { type: "color" },
      },
    },
    tags: ["autodocs"],
  };


