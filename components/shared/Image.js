import { getStrapiMedia } from "../../lib/media";
import PropTypes from 'prop-types';

const Image = ({ image,className, style }) => {
  const imageUrl = getStrapiMedia(image);
  return (
    <img
      src={imageUrl}
      className={className || 'img-class'}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};
Image.prototype = {
    className: PropTypes.string,
    image: PropTypes.object,
    style: PropTypes.object
}

export default Image;