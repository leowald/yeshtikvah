import React from "react";
import PropTypes from "prop-types";
import Alert from "./Alert";
import errorStyles from "./Error.module.scss";

/**
 *
 * This component return an Error Alert box, bootstrap styled.
 */
export default function Error({ errText, image }) {
  return (
    <div>
      <Alert type="danger" flex={true}>
        <div className={errorStyles.errImage}>
          <img src={image} />
        </div>
        <div className={errorStyles.errText}>
          <span> Error! </span>
          <span>{errText}</span>
        </div>
      </Alert>
    </div>
  );
}

Error.propTypes = {
  /** The content to appear in the Error box */
  errText: PropTypes.string,
  image: PropTypes.string,
};
