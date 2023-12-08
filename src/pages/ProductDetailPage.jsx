import clsx from "clsx";
import PropTypes from "prop-types";
import { Plus, Minus, PlusCircle } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../utils/firebaseConfig";
import { useQuantity } from "../hooks/useQuantity";
import RatingStars from "../components/RatingStars";
import { CartContext } from "../context/CartContext";
import { BounceLoader } from "react-spinners";
import { getPriceWithoutDiscount } from "../utils/utils";

export default function ProductDetailPage() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState("");

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = collection(db, "products");

    const q = query(docRef, where("id", "==", Number(productId)));

    getDocs(q)
      .then((snapshot) => {
        setProduct(snapshot.docs[0].data());
        setActiveImg(snapshot.docs[0].data().images[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <BounceLoader className="" />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen gap-8 p-8 max-lg:flex-col lg:flex-row">
      <div className="flex basis-1/2 flex-col items-center gap-8">
        <div className="h-[70vh]">
          <img
            className="h-full w-full object-contain"
            src={activeImg}
            alt={product.title + "Image"}
          />
        </div>
        <ImagenGallery
          images={product.images}
          active={activeImg}
          setActive={setActiveImg}
        />
      </div>
      <ProductDetails product={product} productId={productId} />
    </main>
  );
}

function ProductDetails({ product, productId }) {
  const { increment, decrement, quantity } = useQuantity(1);
  const { addToCart, cart } = useContext(CartContext);
  const navigate = useNavigate();

  const isDisabled = cart.some((product) => product.id === Number(productId));

  const { title, description, category, price, rating, discountPercentage } =
    product;

  const priceWithoutDiscount = getPriceWithoutDiscount(
    price,
    discountPercentage,
  );

  const onClick = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <div className="basis-1/2 space-y-4">
      <h1 className="text-4xl">{title}</h1>
      <span className="font-serif italic text-slate-700">{category}</span>
      <div className="flex flex-col">
        <div className="text-md font-thin text-slate-400">
          <span className="mr-2 line-through">${priceWithoutDiscount}</span>
          <span className="font-semibold text-green-500">
            %{product.discountPercentage} OFF 🌶️
          </span>
        </div>
        <div className="flex items-center gap-4 max-md:flex-col max-md:items-start">
          <span className="text-4xl font-black tracking-wider">
            ${price.toFixed(2)}
          </span>
          <div className="flex gap-2">
            <RatingStars rate={rating} />
            <p className="text-sm font-semibold">{rating}</p>
          </div>
        </div>
      </div>
      <QuantitySelector
        increment={increment}
        decrement={decrement}
        quantity={quantity}
      />
      <div className="space-y-2">
        <h3 className="font-bold">Description</h3>
        <p className="text-sm">{description}</p>
      </div>
      <AddCartButton onClick={onClick} isDisabled={isDisabled} />
    </div>
  );
}

function ImagenGallery({ images, active, setActive }) {
  return (
    <div className="flex gap-4">
      {images.map((img, i) => (
        <div
          onClick={() => setActive(img)}
          className={clsx(
            "aspect-square h-24 overflow-hidden rounded-lg border-2 shadow-md duration-150 ease-in-out hover:scale-105",
            active === img ? "border-slate-500" : "border-slate-200",
          )}
          key={i}
        >
          <img className="h-full w-full object-cover" src={img} />
        </div>
      ))}
    </div>
  );
}

function QuantitySelector({ increment, decrement, quantity }) {
  return (
    <div className="space-y-2">
      <h3 className="font-bold">Quantity</h3>
      <div className="flex w-fit items-center gap-8 rounded-full px-4 py-2 shadow-md">
        <button onClick={decrement} className="hover:text-slate-500">
          <Minus />
        </button>
        <span>{quantity}</span>
        <button onClick={increment} className="hover:text-slate-500">
          <Plus />
        </button>
      </div>
    </div>
  );
}

function AddCartButton({ onClick, isDisabled }) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 rounded px-4 py-2",
        isDisabled
          ? "bg-gray-300 text-gray-500"
          : "bg-black text-white shadow-md hover:bg-slate-100 hover:text-black",
      )}
      disabled={isDisabled}
    >
      {isDisabled ? (
        <>Already in the cart</>
      ) : (
        <>
          Add to the cart
          <PlusCircle />
        </>
      )}
    </button>
  );
}

// Prop-Types

ProductDetails.propTypes = {
  productId: PropTypes.string.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number.isRequired,
  }).isRequired,
};

QuantitySelector.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};

ImagenGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
};

AddCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
