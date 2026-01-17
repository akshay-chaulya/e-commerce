import React, { useState } from "react";
import Title from "@/components/common/Title";
import CartTotal from "@/components/cart/CartTotal";
import { assets } from "@/assets/assets";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const methodCheck = (typeMethod) => method === typeMethod;

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ---------------------Left Side------------------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-120">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="Delivery" text2="Information" />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 rounded px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="Zip code"
          />
          <input
            className="border border-gray-300 rounded px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded px-3.5 w-full"
          type="number"
          minLength={10}
          maxLength={10}
          placeholder="Phone number"
        />
      </div>
      {/* ---------------------Right Side------------------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1="Payment" text2="Method" />
          {/* ----------------Payment Method Selection---------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  methodCheck("stripe") ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  methodCheck("razorpay") ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  methodCheck("cod") ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm">CASH ON DELIVERY</p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <Link
              className="px-16 py-3 text-sm bg-black text-white "
              to="/orders"
            >
              PLACE ORDER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
