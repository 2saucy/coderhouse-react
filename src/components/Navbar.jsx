import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className="hidden md:block">
      <ul className="font-sm flex gap-4 text-black/50">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-black" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <Dropdown label={"Categories"} data={categories} />
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-black" : "")}
            aria-disabled
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
