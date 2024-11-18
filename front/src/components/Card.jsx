import "./Card.scss";
import "../utils/styles.jsx";
import { getBackground } from "../utils/styles.jsx";
import PropTypes from "prop-types";

/** This component creates a card around specific text with specific css including rounded edges etc. It also takes in a background color/gradient which then sets the background of the component accordingly. */

export default function Card({backgroundColor,children,text}) {
    return (<div role="card" className="card" style={{backgroundColor: getBackground(backgroundColor),background:getBackground(backgroundColor)}}>{children}{text}</div>);
}


Card.propTypes = {
    /** What background color / gradient to use. */
    backgroundColor: PropTypes.oneOfType([PropTypes.string,PropTypes.object]),
    /** Text within the box. */
    text: PropTypes.string,
};