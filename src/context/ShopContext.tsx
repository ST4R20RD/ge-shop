import { createContext, useEffect, useState } from "react";
import { useGetAllProducts } from "../lib/api-hooks";

interface ShopContextProviderChildren {
  children: JSX.Element;
}

interface Cart {
  [key: number]: number;
}

export type ShopContextType = {
  cartItems: Cart;
  getTotalCartAmount: () => number | undefined;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  checkout: () => void;
};

export const ShopContext = createContext<ShopContextType | null>(null);

export function ShopContextProvider({ children }: ShopContextProviderChildren) {
  const [allProducts, getAllProducts] = useGetAllProducts();

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  const [cartItems, setCartItems] = useState<Cart>({});

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.id === Number(item));
        if (!itemInfo) return;
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount as number;
  };

  const addToCart = (itemId: number) => {
    const updatedCartItems = { ...cartItems };
    updatedCartItems[itemId] = (updatedCartItems[itemId] || 0) + 1;
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems({});
  };

  const contextValue = {
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    checkout,
  };
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
}
