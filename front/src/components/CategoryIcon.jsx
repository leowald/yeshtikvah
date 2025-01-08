import styles from "./CategoryIcon.module.scss";
import PropTypes from "prop-types";

/** This component takes in an imageIcon (object)
 * the imageIcon is build by an object with the following parameters.
 * 1. src  e.g. "picture.jpg" or "https://avatars.githubusercontent.com/u/52691663"
 * 2. alt:  alt image text
 * 3. title: image title
 *
 * The size parameter expects values small, medium or large
 */

export default function CategoryIcon({ imageIcon, size }) {
  let imgSrc = imageIcon.src;
  imgSrc = imgSrc.includes("//")
    ? imgSrc
    : import.meta.env.VITE_IMAGE_PATH + imgSrc;
  return (
    <>
      <img
        role="img"
        className={styles[size]}
        src={imgSrc}
        alt={imageIcon.alt}
        title={imageIcon.title}
      />
    </>
  );
}

CategoryIcon.propTypes = {
  /** What image to use. This parameter is an object with the following properties: color, src */
  imageIcon: PropTypes.object,
  /** What size should the image be? */
  size: PropTypes.string,
};
