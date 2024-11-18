import "./styles.jsx";
import { getBackground } from "./styles.jsx";

const background={
  colors: [
  { color: "#EBB011", deg: "0%" },
  { color: "#ED861D", deg: "99.48%" },
  ],
  sideCorner: "180deg",
  }

export default {
    component: "styles.jsx",
  };

  
  export const CardBackgroundFunction = {
    args: { background: background,  },
    tags: ["autodocs"],
  };

