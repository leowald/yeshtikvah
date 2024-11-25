import React from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";

/**
 *
 * This component return an Error Alert box, bootstrap styled.
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
