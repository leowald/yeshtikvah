import styles from "./Icon.module.scss";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

/** This component takes in a top Icon (object) and an optional bottom Icon (object) and a size and creates a font-awesome icon accordingly.
 * Each icon is build by an object with the following parameters.
 * 1. color e.g. "red"
 * 2. name e.g. "fa-house"
 * 3. type e.g. 'fas' (solid icon), 'far' (regular icon) or 'fab' (brand icon).
 * 4. style (optional) e.g. {border: "1px solid red"}
 *
 * For the topIcon, the color,name and type are required.
 * For the bottomIcon, only the color is required.
 * The size parameter ranges between 1 and 10.
 * Any additional styling e.g.beatFade can also be passed through the icon.
 */
export default function Icon({ topIcon, size, bottomIcon, ...extras }) {
  return (
    <>
      <div className={bottomIcon ? `${styles.icon}` : ""}>
        {bottomIcon && (
          <FontAwesomeIcon
            data-testid="bottomIcon"
            style={bottomIcon.style}
            color={bottomIcon.color}
            icon={`${bottomIcon.name || "fa-circle"} ${
              bottomIcon.type || "fas"
            }`}
            size={`${size}x`}
            fixedWidth
            className={styles.iconChild}
          />
        )}
        <FontAwesomeIcon
          data-testid="topIcon"
          style={topIcon.style}
          color={topIcon.color}
          icon={`${topIcon.name} ${topIcon.type}`}
          size={`${size}x`}
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
  /** What size the fa icon should be e.g. "3" */
  size: PropTypes.string,
};
