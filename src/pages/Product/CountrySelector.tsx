import { useState, useMemo } from "react";
import countryList from "react-select-country-list";

export function CountrySelector() {
  const [value, setValue] = useState("PT");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={changeHandler} className="max-w-[130px]">
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}
