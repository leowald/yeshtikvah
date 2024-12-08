import React from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";
import Icon from "./Icon.jsx";
import { getBackground } from "../utils/styles.jsx";

export default function Button({
  type,
  btnText,
  onClick,
  backgroundColor,
  size,
  icon,
  iconPosition = true,
  outline = false,
  ...extras
}) {
  const buttonStyle = {
    borderRadius: "20px",
    background: !outline ? getBackground(backgroundColor) : "white",
    border: outline ? `1px solid ${getBackground(backgroundColor)}` : "none",
    color: outline ? getBackground(backgroundColor) : "white",
    ...extras,
  };
  let className = "";
  className +=
    (size === "sm" && style.sm) || (size === "lg" && style.lg) || style.md;

  className += type
    ? ` d-flex btn btn${outline ? "-outline-" : "-"}${type}`
    : "";

  return (
    <button
      style={!type ? buttonStyle : { borderRadius: "20px" }}
      onClick={() => onClick}
      type="button"
      className={className}
    >
      {icon && iconPosition && <Icon {...icon}></Icon>}&nbsp;
      {btnText}&nbsp;{icon && !iconPosition && <Icon {...icon}></Icon>}
    </button>
  );
}

Button.propTypes = {
  /** The bootstrap Button style that you want.  */
  type: PropTypes.oneOf(["success", "danger", "warning", "info"]),
  /** The content to appear in the Button */
  btnText: PropTypes.string,
  /** The bacground color of the button - can be a string OR an object */
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The button size you want */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** The icon to pass into the button*/
  icon: PropTypes.object,
  /** The icon position before/after test */
  iconPosition: PropTypes.bool,
  /** Specify if button should have outline and then backgroundColor will be color of outline and text */
  outline: PropTypes.bool,
};
