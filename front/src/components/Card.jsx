import styles from "./Card.module.scss";
import "../utils/styles.jsx";
import { getBackground } from "../utils/styles.jsx";
import PropTypes from "prop-types";
import { useState } from "react";

/** This component creates a card around specific text with specific css including rounded edges etc. It also takes in a background color/gradient which then sets the background of the component accordingly. */

export default function Card({ backgroundColor, children }) {
  const [hover, updateHover] = useState(false);

  function toggleHover() {
    updateHover(!hover);
  }

  return (
    <div
      role="card"
      className={hover ? styles.cardhover : styles.card}
      style={{ background: getBackground(backgroundColor) }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  /** What background color / gradient to use.
   * If you are inserting an object, it should look like the following example: 
   *    const background={
    colors: [
    { color: "#EBB011", deg: "0%" },
    { color: "#ED861D", deg: "99.48%" },
    ],
    sideCorner: "180deg",
    }
    * The degrees and the sideCorner are optional parameters.
   */
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
