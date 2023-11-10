import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, title }) => {
  return (
    <Link to={`/product/${id}`}>
      <div
        key={id}
        className="rounded p-4 shadow-sm duration-300 ease-out hover:shadow-lg"
      >
        <img
          src={image}
          className="h-48 w-48 object-contain"
          alt={`${title} Image`}
        />
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
};

export default ProductCard;
