// La verdad que no se para que este componente
// Ya lucide-react me los iconos como componente.

import { ShoppingCart } from "lucide-react";

const CartWidget = () => {
  return (
    <button className="rounded-full p-2 bg-black/80 hover:scale-105 duration-100 ease-in-out">
      <ShoppingCart className="text-white" size={20} />
    </button>
  )
}
 
export default CartWidget;