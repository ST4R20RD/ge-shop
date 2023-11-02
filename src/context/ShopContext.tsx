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
  getTotalCartAmount: () => number;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  checkout: () => void;
  selectedCurrency: string;
  handleCurrencyChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const ShopContext = createContext<ShopContextType | null>(null);

export function ShopContextProvider({ children }: ShopContextProviderChildren) {
  const [allProducts, getAllProducts] = useGetAllProducts();

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  const [cartItems, setCartItems] = useState<Cart>({});

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const productId = Number(item);
        let itemInfo = allProducts.find((product) => product.id === Number(item));
        if (!itemInfo) {
          console.error(`Product id: ${productId} not found.`);
          continue;
        }
        totalAmount +=
          cartItems[item] *
          (selectedCurrency === "Dollar" ? itemInfo.price : itemInfo.price * 0.94);
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

  const [selectedCurrency, setSelectedCurrency] = useState<string>("Dollar");

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedCurrency = selectedValue === "euro" ? "Euro" : "Dollar";
    setSelectedCurrency(selectedCurrency);
    localStorage.setItem("selectedCurrency", selectedCurrency);
  };

  const contextValue = {
    cartItems,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    checkout,
    selectedCurrency,
    handleCurrencyChange,
  };
  return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
}
