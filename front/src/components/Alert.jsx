import React from "react";
import PropTypes from "prop-types";
// need to import bootstrap css here so that it can be used by storybook documentation
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * This component displays a Bootstrap Alert box.
 * The style is set by the type prop.
 */

export default function Alert({ type, children, flex = false }) {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show bd-highlight ${
        flex && "d-flex"
      }`}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

Alert.propTypes = {
  /** The bootstrap Alert style that you want.  */
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  /** The content to appear in the Alert box */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** Is the Alert box content to flexed?  */
  flex: PropTypes.bool,
};
