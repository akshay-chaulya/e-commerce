import { useContext, useMemo } from "react";
import { assets } from "@/assets/assets";
import Title from "@/components/common/Title";
import { ShopContext } from "@/context/ShopContext";
import CartTotal from "@/components/cart/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateCart } = useContext(ShopContext);

  const cartList = useMemo(() => {
    let list = [];
    for (let itemId in cartItems) {
      const product = products.find((p) => p._id === itemId);
      if (!product) continue;
      for (let size in cartItems[itemId]) {
        const quantity = cartItems[itemId][size];

        list.push({
          ...product,
          image: product.image?.[0],
          size,
          quantity,
        });
      }
    }
    return list;
  }, [products, cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Your" text2="Cart" />
      </div>
      {cartList.map((product, idx) => (
        <div
          key={product._id + idx}
          className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
        >
          <div className="flex items-start gap-6">
            <img className="w-16 sm:w-20" src={product.image} alt="" />
            <div className="">
              <p className="text-sx sm:text-lg font-medium">{product.name}</p>
              <div className="flex gap-5 items-center mt-2">
                <p>
                  {currency}
                  {product.price}
                </p>
                <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                  {product.size}
                </p>
              </div>
            </div>
          </div>

          <input
            onChange={(e) =>
              e.target.value === "" || e.target.value === "0"
                ? null
                : updateCart(product._id, product.size, Number(e.target.value))
            }
            className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
            type="number"
            min={1}
            defaultValue={product.quantity}
          />

          <img
            onClick={() => updateCart(product._id, product.size, 0)}
            src={assets.bin_icon}
            alt=""
            className="w-4 mr-4 sm:w-5 cursor-pointer"
          />
        </div>
      ))}

      {/* Cart Total  */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-112.5">
          <CartTotal />
          <div className="w-full text-end">
            <Link
              to="/place-order"
              className="bg-black text-white text-sm inline-block my-8 px-8 py-3 cursor-pointer"
            >
              PROCEED TO CHECKOUT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
