import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

/**
 * This component displays an Alert box using Bootstrap styling.
 * The style is set by the {type} prop.
 */

export default function Alert({ type, children, flex = false }) {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div
          className={`alert alert-${type} alert-dismissible fade show bd-highlight ${
            flex && "d-flex"
          }`}
          role="alert"
        >
          {children}
          <button
            onClick={() => setShow(false)}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
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
