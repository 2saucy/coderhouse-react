import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function BurgerMenu({ categories, subcategories }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="lg:hidden"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="bg-black absolute z-10"> 
          hola
        </div>
      )}
    </div>
  )
}