import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "./ProductCard";


export default function ProductListContainer({ products }) {
  const [searchParams] = useSearchParams();
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setFiltered(products);
      return;
    }

    const filteredProducts = products.filter((product) => {
      const searchQuery = searchParams.get("search")?.toLocaleLowerCase();
      const productTitle = product.title.toLowerCase();
      return productTitle.startsWith(searchQuery);
    });

    setFiltered(filteredProducts);
  }, [searchParams, products]);

  return (
    <div className="grid gap-8 max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.map(({ id, title, images, price, discountPercentage }, i) => (
        <ProductCard
          key={i}
          id={id}
          title={title}
          images={images}
          price={price}
          discountPercentage={discountPercentage}
        />
      ))}
    </div>
  );
}

ProductListContainer.propTypes = {
  products: PropTypes.array.isRequired,
};
