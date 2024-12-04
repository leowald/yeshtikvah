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
}) {
  const buttonStyle = {
    borderRadius: "20px",
    background: !outline ? getBackground(backgroundColor) : "white",
    border: outline ? `1px solid ${getBackground(backgroundColor)}` : "none",
    color: outline ? getBackground(backgroundColor) : "white",
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
      {icon && <Icon {...icon}></Icon>}&nbsp;
      {btnText}
    </button>
  );
}

Button.propTypes = {
  /** The bootstrap Button style that you want.  */
  type: PropTypes.oneOf(["success", "danger", "warning", "info"]),
  /** The content to appear in the Button */
  btnText: PropTypes.string,
};
