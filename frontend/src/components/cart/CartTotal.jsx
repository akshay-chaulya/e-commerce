import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import Title from "@/components/common/Title";

const CartTotal = () => {
  const {currency} = useContext(ShopContext);

  return (
      <div className="w-full">
        <div className="text-2xl">
          <Title text1="Cart" text2="Total" />
        </div>

        <div className="flex flex-col gap-2 mt-2 text-sm">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{currency} 2000.00</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Shipping Fee</p>
            <p>{currency} {10}</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <b>Total</b>
            <b>{currency} 2010.00</b>
          </div>
        </div>
      </div>
  );
};

export default CartTotal;
