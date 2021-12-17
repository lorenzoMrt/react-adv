import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, SetCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newVal = Math.max(counter + value, 0);
    SetCounter(newVal);
    onChange && onChange({ count: newVal, product });
  };
  return { counter, increaseBy };
};
