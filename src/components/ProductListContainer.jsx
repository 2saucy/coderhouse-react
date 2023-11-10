import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductListContainer = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-4 my-8">
      {products.map(({ id, title, image }) => (
        <ProductCard key={id} id={id} title={title} image={image} />
      ))}
    </div>
  );
};

ProductListContainer.propTypes = {
  products: PropTypes.array,
};

export default ProductListContainer;