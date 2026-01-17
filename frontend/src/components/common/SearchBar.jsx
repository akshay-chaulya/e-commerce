import { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();

  const visible = useMemo(() => {
    if (location.pathname.includes("collection")) return showSearch;
  }, [location, showSearch]);

  return (
    <div
      className={`border-t border-b bg-gray-50 text-center transition-all ease-in-out duration-300 ${
        showSearch && visible
          ? "opacity-100 h-full w-full"
          : "opacity-0 h-0 w-0"
      }`}
    >
      <div className="inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} className="w-4" alt="" />
      </div>
      <img
        onClick={() => {
          setShowSearch(false);
          setSearch("");
        }}
        src={assets.cross_icon}
        className="inline w-3 cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default SearchBar;
