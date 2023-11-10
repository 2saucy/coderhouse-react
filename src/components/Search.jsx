import { SearchIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const Search = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // La proxima pre-entrega termino esto

  return (
    <div
      className={clsx(
        "hidden md:flex items-center rounded-full bg-slate-100 p-4 py-2 duration-300 ease-in-out",
        isFocused && "shadow-md",
      )}
    >
      <SearchIcon className="h-4 w-4" />
      <input
        placeholder="Search for a product..."
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="text-thin ml-2 bg-transparent outline-none"
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Search;
