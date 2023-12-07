import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { X, Minus, Plus } from "lucide-react";

import { CartContext } from "../context/CartContext";
import { useQuantity } from "../hooks/useQuantity";

export default function CartPage() {
  const { cart, total } = useContext(CartContext);

  console.log(typeof total);

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <main className="flex h-full items-start justify-center gap-8 max-lg:flex-col max-md:p-4 md:p-8">
      <Cart cart={cart} />
      <Summary total={total} cart={cart} />
    </main>
  );
}

function Cart({ cart }) {
  return (
    <div className="max-h-[80vh] w-full space-y-4 overflow-y-auto rounded-xl bg-slate-100 p-4">
      {cart.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          images={product.images}
          initialQuantity={product.quantity}
        />
      ))}
    </div>
  );
}

function Card({ id, images, title, price, initialQuantity }) {
  const { quantity, increment, decrement } = useQuantity(initialQuantity);
  const { removeFromCart, changeQuantity } = useContext(CartContext);

  useEffect(() => {
    changeQuantity(id, quantity);
  }, [quantity]);

  return (
    <div key={id} className="flex flex-col rounded-lg bg-white p-4 shadow-md">
      <button onClick={() => removeFromCart(id)} className="self-end">
        <X className="h-4 w-4 text-slate-400 hover:text-slate-900" />
      </button>
      <div className="flex items-center gap-4 max-sm:flex-col">
        <div className="h-32 w-32">
          <img
            className="h-full w-full object-contain"
            src={images[0]}
            alt={title + "Image"}
          />
        </div>
        <div className="space-y-2 self-start">
          <Link
            className="text-xl font-bold hover:underline"
            to={`/product/${id}`}
          >
            {title}
          </Link>
          <div className="flex items-center gap-4">
            Quantity:
            <div className="flex items-center gap-4">
              <button
                className="rounded-full p-[1px] duration-150 hover:bg-slate-500/10"
                onClick={() => decrement()}
              >
                <Minus />
              </button>
              <span>{quantity}</span>
              <button
                className="rounded-full p-[1px] hover:bg-slate-500/10"
                onClick={() => increment()}
              >
                <Plus />
              </button>
            </div>
          </div>
          <p>Unit price: ${price}</p>
        </div>
      </div>
    </div>
  );
}

function CartEmpty() {
  return (
    <div className="flex h-full items-center justify-center gap-8 bg-slate-100 p-8">
      <div className="flex justify-center">
        <img className="h-64" src="/empty-cart.png" alt="Empty Cart" />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl font-bold">The cart is empty</h2>
        <p className="text-2xl font-thin">
          Find some products to add to your cart
        </p>
        <Link className="text-slate-800 hover:underline" to={"/"}>
          Back to homepage
        </Link>
      </div>
    </div>
  );
}

function Summary({ cart, total }) {
  return (
    <div className="h-fit w-full self-start rounded-xl bg-slate-200/30 p-8 lg:w-1/3">
      <h2 className="mb-2 text-xl font-semibold">Summary </h2>
      <hr className="my-4" />
      {cart.map((product) => (
        <div key={product.id} className="flex justify-between max-sm:flex-col">
          <p className="truncate  lg:max-w-[60%]">{product.title}</p>
          <p>
            ${product.price} <span className="font-black">*</span>{" "}
            {product.quantity}
          </p>
        </div>
      ))}
      <hr className="my-4" />
      <div className="flex justify-between text-lg">
        <p>Total</p>
        <p className="font-semibold">${total}</p>
      </div>
      <Link to="/checkout">
        <div className="mt-6 w-full rounded-lg border-2 bg-black py-2 text-center font-bold text-white duration-300 hover:bg-black/70">
          Checkout
        </div>
      </Link>
    </div>
  );
}

// Prop-types

Summary.propTypes = {
  cart: PropTypes.array.isRequired,
  total: PropTypes.string.isRequired,
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  initialQuantity: PropTypes.number.isRequired,
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};
