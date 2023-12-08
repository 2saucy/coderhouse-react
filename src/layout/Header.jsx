import clsx from "clsx";
import { Toaster } from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import Search from "../components/Search";
import Navbar from "../components/Navbar";

export default function Header() {
  const pathname = useLocation().pathname;

  return (
    <header className="relative flex w-full justify-between bg-black px-6 py-2 text-slate-100">
      <Toaster />
      <div className="flex items-center  md:gap-4 lg:gap-8">
        <Link to="/" className="font-serif text-6xl font-bold">
          Z
        </Link>
        <Navbar />
      </div>
      <div className="flex items-center gap-4 lg:gap-8">
        {pathname.includes("category") ? <Search /> : null}
        <Link to="/cart">
          <ShoppingCart
            className={clsx(
              "h-6 w-6",
              pathname === "/cart"
                ? "text-slate-600"
                : "duration-150  ease-in hover:text-slate-600",
            )}
          />
        </Link>
      </div>
    </header>
  );
}
