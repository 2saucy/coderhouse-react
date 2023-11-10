import Navbar from "../Navbar";
import Search from "../Search";
import { Link } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex w-full justify-between bg-white px-6 py-2 shadow-sm">
      <div className="flex items-center  md:gap-4 lg:gap-8">
        <Link to="/" className="font-serif text-6xl font-bold">
          Z
        </Link>
        <Navbar />
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        <Search />
        <ShoppingCart
          className="h-6 w-6 text-black hover:animate-pulse"
          strokeWidth={1}
        />
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
