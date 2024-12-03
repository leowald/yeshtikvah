import React from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";
import { getBackground } from "../utils/styles.jsx";

export default function Button({
  text,
  onClick,
  backgroundColor,
  size,
  outline = false,
  theme,
}) {
  const buttonStyle = {
    borderRadius: "20px",
    background: !outline ? getBackground(backgroundColor) : "white",
    border: outline ? `1px solid ${getBackground(backgroundColor)}` : "none",
    color: outline ? getBackground(backgroundColor) : "white",
  };

  return (
    <button
      style={buttonStyle}
      onClick={() => onClick}
      className={
        (size === "sm" && style.sm) || (size === "lg" && style.lg) || style.md
      }
    >
      {text}
    </button>
  );
}

/**Button.propTypes = {
  /** The bootstrap Button style that you want.  */
/**  theme: PropTypes.oneOf(["success", "danger", "warning", "info"]),*/
/** The content to appear in the Button */
/**  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};*/
