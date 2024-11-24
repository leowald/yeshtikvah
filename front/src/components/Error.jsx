import React from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

/**
 * @method
 * @param {string} type
 * @param {string, element} children
 * @param {boolean} flex
 *
 * @returns bootstrap Alert box
 */
export default function Error({ children }) {
  return (
    <div>
      <Alert type="danger" flex={true}>
        {children}
      </Alert>
    </div>
  );
}

Error.propTypes = {
  /** The content to appear in the Error box */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
