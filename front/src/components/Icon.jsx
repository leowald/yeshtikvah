import styles from "./Icon.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

/** This component takes in a top Icon (object) and an optional bottom Icon (object) and a size and creates a font-awesome incon accordingly */
export default function Icon({ topIcon, size, bottomIcon, ...extras }) {
  return (
    <>
      <div className={bottomIcon ? `${styles.icon}` : ""}>
        {bottomIcon && (
          <FontAwesomeIcon
            data-testid="bottomIcon"
            style={bottomIcon.style}
            color={bottomIcon.color}
            icon={`${bottomIcon.name ? bottomIcon.name : "fa-circle"} ${
              bottomIcon.type ? bottomIcon.type : "fas"
            }`}
            size={size}
            fixedWidth
            className={styles.iconChild}
          />
        )}
        <FontAwesomeIcon
          data-testid="topIcon"
          style={topIcon.style}
          color={topIcon.color}
          icon={`${topIcon.name} ${topIcon.type}`}
          size={size}
          {...extras}
          fixedWidth
          transform="shrink-6"
          className={styles.iconChild}
        />
      </div>
    </>
  );
}

Icon.propTypes = {
  /** What icon to use as the top icon. This parameter is an object with the following properties: color,name,type, style(optional) and extras(optional). */
  topIcon: PropTypes.object,
  /** What icon to use as the bottom icon. This is an optional parameter.  */
  bottomIcon: PropTypes.object,
  /** What size the fa icon should be e.g. "3x" */
  size: PropTypes.string,
};
