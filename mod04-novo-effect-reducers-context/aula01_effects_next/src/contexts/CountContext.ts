

import { createContext } from "react";

type CountContextType = {
    onlineCount: number,
    setOnlineCount: (n: number) => void;
}

export const CountContext = createContext<CountContextType | null>(null);

// trocar de armazenar um numero 
// por um objeto com dois valores diferentes