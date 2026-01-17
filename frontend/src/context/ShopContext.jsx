import { createContext, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { products } from "@/assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...(prev[itemId] || {}),
        [size]: (prev[itemId]?.[size] || 0) + 1,
      },
    }));
  };

  const updateCart = (itemId, size, quantity) => {
    setCartItems((prev) => {
      const updatedCart = {...prev};

      if (quantity === 0) {
        // remove size
        if (updatedCart[itemId]) {
          delete updatedCart[itemId][size];

          // remove product if no sizes left 
          if (Object.keys(updatedCart[itemId]).length === 0) {
            delete updatedCart[itemId];
          }
        }
        return updatedCart;
      }

      return {...prev, [itemId]: {
        ...prev[itemId],
        [size]: quantity
      }}
    });
  };

  const totalCartItems = useMemo(
    () =>
      Object.values(cartItems)
        .flatMap((item) => Object.values(item))
        .reduce((sum, qty) => sum + qty, 0),
    [cartItems]
  );

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    updateCart,
    totalCartItems,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
