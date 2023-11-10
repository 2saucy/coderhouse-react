import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setProduct(data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) return;

  return (
    <main className="flex gap-8 space-x-6 p-24">
      <div className="basis-1/2">
        <img className="" src={product.image} alt={product.title + "Image"} />
      </div>
      <div className="basis-1/2 space-y-4">
        <h1 className="text-2xl">{product.title}</h1>
        <span className="font-serif italic text-slate-700">
          {product.category}
        </span>
        <p className="text-4xl font-black tracking-wider">${product.price}</p>
        <p className="text-sm">{product.description}</p>
        <button className="rounded bg-black px-4 py-2 text-white shadow-md hover:bg-slate-100 hover:text-black">
          Add to cart
        </button>

        {/* Slider de productos similares */}
      </div>
    </main>
  );
};

export default ProductDetailPage;
