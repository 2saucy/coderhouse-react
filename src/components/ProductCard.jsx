import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ id, images, title, price, discountPercentage }) => {
  const withoutDiscount = price / (1 - discountPercentage / 100);

  return (
    <Link to={`/product/${id}`}>
      <div
        key={id}
        className="relative w-48 space-y-4 rounded bg-white p-4 shadow-sm duration-300 ease-out hover:shadow-xl"
      >
        <div className="absolute -right-4 rounded bg-green-500 px-2 font-bold text-white">
          %{discountPercentage.toFixed(0)}
        </div>
        <img
          src={images[0]}
          className="h-48 w-full object-contain"
          alt={`${title} Image`}
        />
        <hr />
        <div>
          <p className="truncate">{title}</p>
          <div className="space-x-2">
            <span className="text-md font-thin text-slate-400 line-through">
              ${withoutDiscount.toFixed(2)}
            </span>
            <span className="text-xl font-bold tracking-widest">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  price: PropTypes.number,
  discountPercentage: PropTypes.number,
};

export default ProductCard;
