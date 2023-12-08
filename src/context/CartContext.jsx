import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropTypes from "prop-types";

export const CartContext = createContext({});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart
        .reduce((acc, item) => acc + item.price * item.quantity, 0)
        .toFixed(2),
    );
  }, [cart]);

  const addToCart = (product, quantity) => {
    const ifExist = cart.find((item) => item.id === product.id);

    if (ifExist) {
      changeQuantity(product.id, quantity);
      return;
    }

    product.quantity = quantity;
    setCart([...cart, product]);
    toast.success("Item addded to cart!", {
      duration: 1000,
    });
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    toast.success("Item removed from cart!", {
      duration: 1000,
    });
  };

  const changeQuantity = (productId, quantity) => {
    const newCart = cart.map((product) => {
      if (product.id === productId) {
        product.quantity = quantity;
        return product;
      }

      return product;
    });

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
    toast.success("Cart cleared!");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        total,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
