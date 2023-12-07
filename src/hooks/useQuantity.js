import { useState } from "react";

export const useQuantity = (initialValue) => {
  const [quantity, setQuantity] = useState(initialValue);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return {
    quantity,
    increment,
    decrement,
  };
};
