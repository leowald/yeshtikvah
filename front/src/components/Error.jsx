import PropTypes from "prop-types";
import Alert from "./Alert";
import errorStyles from "./Error.module.scss";
import Icon from "./Icon";

/**
 *
 * This component return an Error Alert box, bootstrap styled.
 */
export default function Error({ errText }) {
  const topIcon = {
    color: "white",
    name: "fa-triangle-exclamation",
    type: "fas",
  };

  const bottomIcon = {
    color: "red",
  };

  return (
    <div>
      <Alert type="danger" flex={true}>
        <div>
          <Icon topIcon={topIcon} bottomIcon={bottomIcon} size="5x"></Icon>
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
};
