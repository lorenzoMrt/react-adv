import { useState } from "react";

export const useProduct = () => {
    const[counter, SetCounter] = useState(0);

    const increaseBy = (value: number) => {
        SetCounter(prev => Math.max(prev + value, 0))
    }
    return {counter, increaseBy}
}
