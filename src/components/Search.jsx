import { SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    const value = e.target.value;

    if (value) {
      setValue(e.target.value);
      setSearchParams({ search: e.target.value });
    } else {
      onClear();
    }
  };

  const onClear = () => {
    setValue("");
    setSearchParams({});
  };

  return (
    <div className="hidden items-center rounded-full bg-slate-100 p-4 py-2 text-slate-950 duration-300 ease-in-out md:flex">
      <SearchIcon className="h-4 w-4" />
      <input
        placeholder="Search for a product..."
        value={value}
        className="text-thin ml-2 bg-transparent outline-none"
        onChange={onChange}
        type="text"
      />
      {value && (
        <button onClick={onClear}>
          <X className="h-4 w-4 text-slate-400 hover:text-slate-900" />
        </button>
      )}
    </div>
  );
}
