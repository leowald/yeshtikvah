import React from "react";
import style from "./Button.module.scss";
import PropTypes from "prop-types";
import Icon from "./Icon.jsx";
import { getBackground } from "../utils/styles.jsx";
import { useRef } from "react";
import useHover from "../../hooks/useHover.jsx";

/** This component creates a button in various sizes, colors and designs, with an option of adding an icon as well. */

export default function Button({
  backgroundColor,
  outline = false,
  btnText,
  size = "md",
  theme,
  icon,
  iconPosition = true,
  onClickFunction,
  ...extras /** Option to add any style, e.g. "border: 2px solid black" etc. */
}) {
  const elementRef = useRef();
  const hovered = useHover(elementRef);

  /**style for button based on props*/
  const buttonStyle = {
    background: !outline ? getBackground(backgroundColor) : "white",
    color: outline ? getBackground(backgroundColor) : "white",
    ...extras,
  };

  /**style for outline based on background color*/
  const outlineStyle = {
    background:
      typeof backgroundColor == "object"
        ? `${getBackground(backgroundColor)} padding-box, ${getBackground(
            backgroundColor
          )} border-box`
        : `${getBackground(backgroundColor)} border-box`,
    ...extras,
  };

  /**style to be applied to text if gradient text is needed*/
  const textGradient = {
    background: getBackground(backgroundColor),
    backgroundClip: "text",
  };

  let btnClass = `${style.btn} ${style[size]}`;
  btnClass += theme
    ? ` ${outline ? style[`${theme}_outline`] : style[theme]}`
    : "";

  let textClass = `${style.text} `;
  textClass += icon
    ? !iconPosition
      ? `${style.textRight} `
      : `${style.textLeft} `
    : "";
  textClass +=
    !theme && outline && typeof backgroundColor == "object"
      ? `${style.textGradient}`
      : "";

  return (
    <div>
      <button
        ref={elementRef}
        style={!theme ? buttonStyle : { ...extras }}
        onClick={onClickFunction}
        type="button"
        className={`${btnClass} ${hovered && style.hover}`}
      >
        {icon && iconPosition && <Icon {...icon}></Icon>}
        <div className={textClass} style={outline ? textGradient : {}}>
          {btnText}
        </div>
        {icon && !iconPosition && <Icon {...icon}></Icon>}
        {outline && !theme && (
          <div style={outlineStyle} className={style.outline} />
        )}
      </button>
    </div>
  );
}

Button.propTypes = {
  /** The bootstrap Button style that you want.(optional). The empty theme is to remove all themes  */
  theme: PropTypes.oneOf(["success", "danger", "warning", "info", ""]),
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
