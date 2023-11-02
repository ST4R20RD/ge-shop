import { useContext } from "react";
import { TbWorld } from "react-icons/tb";
import { ShopContext, ShopContextType } from "../../context/ShopContext";

export function CurrencySelect() {
  const { handleCurrencyChange } = useContext(ShopContext) as ShopContextType;
  return (
    <div className="flex items-center">
      <TbWorld />
      <select
        onChange={handleCurrencyChange}
        className="bg-mint dark:bg-midnight rounded-md px-2 text-lg outline-none"
      >
        <option value="euro">Euro €</option>
        <option value="dollar">Dollar $</option>
      </select>
    </div>
  );
}
