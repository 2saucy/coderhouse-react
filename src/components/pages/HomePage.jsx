import { useState, useEffect } from "react";
import ProductListContainer from "../ProductListContainer";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h2 className="text-4xl font-bold">Our Products</h2>
      <ProductListContainer products={products} />
    </main>
  );
};

export default HomePage;
