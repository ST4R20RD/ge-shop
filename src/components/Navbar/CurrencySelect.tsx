import { useContext } from "react";
import { TbWorld } from "react-icons/tb";
import { ShopContext, ShopContextType } from "../../context/ShopContext";

interface Props {
  className: string;
}

export function CurrencySelect({ className }: Props) {
  const { handleCurrencyChange } = useContext(ShopContext) as ShopContextType;
  return (
    <div className="flex items-center">
      <TbWorld />
      <select onChange={handleCurrencyChange} className={`${className} rounded-md px-2 text-lg outline-none `}>
        <option value="euro" className="text-black">
          Euro €
        </option>
        <option value="dollar" className="text-black">
          Dollar $
        </option>
      </select>
    </div>
  );
}
