import { ReactNode, createContext, useState } from "react";

type CountContextType = {
    onlineCount: number,
    setOnlineCount: (n: number) => void;
}

export const CountContext = createContext<CountContextType | null>(null);

type Props = { children: ReactNode; }

export const CountProvider = ( {children}: Props ) => {

    const [onlineCount, setOnlineCount] = useState(45);

    return(
        <CountContext.Provider value={{onlineCount, setOnlineCount}}>
            {children}
        </CountContext.Provider>
    );
}

// agora dentro deste arquivo tenho o contexto e o provider 
// e junto do provider tenho a state para fazer as modificações
// tudo que é necessário para começar a brincadeira
// agora tem que substituir tudo na page.tsx