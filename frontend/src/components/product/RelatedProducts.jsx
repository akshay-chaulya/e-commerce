import React, { useContext, useMemo } from "react";
import { ShopContext } from "@/context/ShopContext";
import Title from "@/components/common/Title";
import ProductItem from "@/components/product/ProductItem";

const RelatedProducts = ({ category, subCategory, _id: currentId }) => {
  const { products } = useContext(ShopContext);

  const related = useMemo(
    () =>
      products
        ?.filter((item) => item._id != currentId)
        ?.filter(
          (item) => item.category.toLowerCase() === category.toLowerCase()
        )
        ?.filter(
          (item) => item.subCategory.toLowerCase() === subCategory.toLowerCase()
        )
        .slice(0, 5),
    [products, category, subCategory, currentId]
  );
  
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1="Related" text2="Products" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((item) => (
          <ProductItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
