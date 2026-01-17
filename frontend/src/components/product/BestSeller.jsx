import React, { useContext, useMemo } from "react";
import { ShopContext } from "@/context/ShopContext";
import Title from "@/components/common/Title";
import ProductItem from "@/components/product/ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);

  const bestSeller = useMemo(() =>
    products.filter((item) => item.bestseller).slice(0, 5), [products]
  );

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      {/* Rendering Product  */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller .map((item) => (
          <ProductItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
