import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductListContainer from "../ProductListContainer";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, [categoryName]);

  return (
    <main>
      <h1 className="text-4xl font-bold">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </h1>
      {/* Resultados mostrar cuando termine la busqueda. */}
      <p className="font-thin italic">({products.length}) Resultados</p>
      <ProductListContainer products={products} />
    </main>
  );
};

export default CategoryPage;
