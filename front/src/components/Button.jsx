import React from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";
import Icon from "./Icon.jsx";
import { getBackground } from "../utils/styles.jsx";

/** This component creates a button in various sizes, colors and designs, with an option of adding an icon as well. */

export default function Button({
  backgroundColor,
  outline = false,
  btnText,
  size,
  theme,
  icon,
  iconPosition = true,
  onClickFunction,
  ...extras /** Option to add any style, e.g. "border: 2px solid black" etc. */
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
      <div
        style={{
          padding: "7px",
          paddingRight: icon && iconPosition ? "20px" : "7px",
          paddingLeft: icon && !iconPosition ? "20px" : "7px",
        }}
      >
        {btnText && btnText}
      </div>
      {icon && !iconPosition && <Icon {...icon}></Icon>}
    </button>
  );
}

Button.propTypes = {
  /** The bootstrap Button style that you want.(optional)  */
  theme: PropTypes.oneOf(["success", "danger", "warning", "info"]),
  /** The content to appear in the Button */
  btnText: PropTypes.string,
  /** The background color of the button - can be a string(for one color) or an object(for gradient background) */
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The button size you want - default is set to md*/
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /** The icon to pass into the button (optional) (see icon component for required / optional props)*/
  icon: PropTypes.object,
  /** The icon position before/after test - default is set to true - before text, false will move the icon to after text */
  iconPosition: PropTypes.bool,
  /** Specify if button should have outline and then backgroundColor will be color of outline and text (background color will be white)*/
  outline: PropTypes.bool,
  /** add a function when clicking on the button */
  onClickFunction: PropTypes.func,
};
