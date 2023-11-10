import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";

const Dropdown = ({ label, data }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1"
        onFocus={() => setIsDropdownActive(true)}
        onBlur={() =>
          setIsDropdownActive(setTimeout(() => setIsDropdownActive(false), 100))
        }
      >
        {label}
        {isDropdownActive ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </button>

      <div
        className={clsx(
          "absolute left-1/2 mt-4 flex w-40 -translate-x-1/2 flex-col overflow-hidden rounded bg-white shadow-md",
          isDropdownActive ? "block" : "hidden",
        )}
      >
        {data.map((category) => (
          <NavLink
            key={category}
            to={`/category/${category}`}
            className={({ isActive }) =>
              isActive
                ? "px-4 py-2 text-black hover:bg-slate-400/10"
                : "px-4 py-2 hover:bg-slate-400/10"
            }
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  data: PropTypes.array,
};

export default Dropdown;
