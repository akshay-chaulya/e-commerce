import { useContext, useMemo, useState } from "react";
import { assets } from "@/assets/assets";
import ProductItem from "@/components/product/ProductItem";
import Title from "@/components/common/Title";
import { ShopContext } from "@/context/ShopContext";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("");

  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;

    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  // Filter and sort all products
  const filterProducts = useMemo(() => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (sortType === "low-high") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, category, subCategory, sortType, showSearch, search]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-50">
      {/* Filter Options  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter((v) => !v)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            alt=""
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Men"}
                className="w-3"
              />{" "}
              Men
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Women"}
                className="w-3"
              />{" "}
              Women
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                onChange={toggleCategory}
                type="checkbox"
                value={"Kids"}
                className="w-3"
              />{" "}
              Kids
            </label>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2 cursor-pointer">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                value={"Topwear"}
                className="w-3"
              />{" "}
              Topwear
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                value={"Bottomwear"}
                className="w-3"
              />{" "}
              Bottomwear
            </label>
            <label className="flex gap-2 cursor-pointer">
              <input
                onChange={toggleSubCategory}
                type="checkbox"
                value={"Winterwear"}
                className="w-3"
              />{" "}
              Winterwear
            </label>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base lg:text-2xl mb-4 flex-col sm:flex-row">
          <Title text1="All" text2="Collections" />
          {/* Product Sort */}
          <select onChange={e => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm p-2 self-end">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
