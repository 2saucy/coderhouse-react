import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { capitalizeFirstLetter, generateCategoriesMap } from "../utils/utils";
import clsx from "clsx";
import PropTypes from "prop-types";

export default function Navbar() {
  const [mainCategories, setMainCategories] = useState([]);
  const [mapCategories, setMapCategories] = useState([]);

  useEffect(() => {
    generateCategoriesMap()
      .then((categories) => {
        const mainCategories = Array.from(categories.keys());
        setMainCategories(mainCategories);
        setMapCategories(categories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <nav className="hidden gap-4 lg:flex">
      {mainCategories.map((category) => (
        <Dropdown
          key={category}
          category={category}
          subcategories={Array.from(mapCategories.get(category))}
        />
      ))}
    </nav>
  );
}

function Dropdown({ category, subcategories }) {
  const [isOpen, setIsOpen] = useState(false);
  const capitalizedCategory = capitalizeFirstLetter(category);

  return (
    <div
      className="relative text-xs"
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="cursor-pointer hover:text-slate-300">
        {capitalizedCategory}
      </div>
      <ul
        className={clsx(
          "absolute z-10 flex flex-col gap-4 bg-black p-4",
          isOpen ? "block" : "hidden",
        )}
      >
        {subcategories.map((subcategory) => {
          const capitalizedSubCategory = capitalizeFirstLetter(subcategory);

          return (
            <li
              key={subcategory}
              className="whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              <NavLink
                to={`/category/${subcategory}`}
                className={({ isActive }) =>
                  isActive ? "text-slate-500" : "hover:text-slate-300"
                }
              >
                {capitalizedSubCategory}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Dropdown.propTypes = {
  category: PropTypes.string,
  subcategories: PropTypes.arrayOf(PropTypes.string),
};
