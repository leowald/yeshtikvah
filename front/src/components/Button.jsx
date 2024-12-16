import React from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";
import Icon from "./Icon.jsx";
import { getBackground } from "../utils/styles.jsx";

/** This component creates a button in various sizes, colors and designs, with an option of adding an icon as well. */

export default function Button({
  theme,
  btnText,
  onClickFunction,
  backgroundColor,
  size,
  icon,
  iconPosition = true,
  outline = false,
  ...extras
}) {
  const buttonStyle = {
    background: !outline ? getBackground(backgroundColor) : "white",
    border: outline ? `1px solid ${getBackground(backgroundColor)}` : "none",
    color: outline ? getBackground(backgroundColor) : "white",
    ...extras,
  };

  let className = `${style.button} `;
  className += extras.borderRadius ? "" : `${style.rd} `;
  className += extras.fontSize
    ? ""
    : (size === "sm" && style.sm) || (size === "lg" && style.lg) || style.md;

  className += theme
    ? ` d-flex btn btn${outline ? "-outline-" : "-"}${theme}`
    : "";

  return (
    <button
      style={!theme ? buttonStyle : { ...extras }}
      onClick={onClickFunction && (() => onClickFunction())}
      type="button"
      className={className}
    >
      {icon && iconPosition && <Icon {...icon}></Icon>}
      {btnText && (
        <p
          style={{
            margin: "0px",
            marginRight: icon && iconPosition && "10px",
            marginLeft: icon && !iconPosition && "10px",
          }}
        >
          {btnText}
        </p>
      )}
      {icon && !iconPosition && <Icon {...icon}></Icon>}
    </button>
  );
}

Button.propTypes = {
  /** The bootstrap Button style that you want.  */
  theme: PropTypes.oneOf(["success", "danger", "warning", "info", ""]),
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
  /** Specify if button should have outline and then backgroundColor will be color of outline and text (background color will be white)*/
  outline: PropTypes.bool,
  /** function when clicking the button */
  onClickFunction: PropTypes.func,
};
