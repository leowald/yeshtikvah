import styles from "./CategoryIcon.module.scss";
import PropTypes from "prop-types";
import Card from "./Card";

/** This component takes in an imageIcon (object) and a backgroundColor.
 * The imageIcon is build by an object with the following parameters:
 * 1. src  e.g. "picture.jpg" or "https://avatars.githubusercontent.com/u/52691663"
 * 2. alt:  alt image text
 * 3. title: image title
 *
 */

export default function CategoryIcon({
  imageIcon: { src, alt, title },
  backgroundColor,
}) {
  let imgSrc = src;
  imgSrc = imgSrc.match("^https?://")
    ? imgSrc
    : import.meta.env.VITE_IMAGE_PATH + imgSrc;
  return (
    <Card backgroundColor={backgroundColor}>
      <div className={styles.icon}>
        <Card backgroundColor={backgroundColor}>
          <img src={imgSrc} alt={alt} title={title} />
        </Card>
      </div>
    </Card>
  );
}

CategoryIcon.propTypes = {
  /** What image to use. This parameter is an object with the following properties: src, alt, title */
  imageIcon: PropTypes.object,
  backgroundColor: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
