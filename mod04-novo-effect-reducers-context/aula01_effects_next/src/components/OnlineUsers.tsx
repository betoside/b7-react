import { CountContext } from "@/contexts/CountContext";
import { useContext } from "react";

export const OnlineUsers = () => {

    const countCtx = useContext(CountContext);

    const handleBanAll = () => {
        countCtx?.setOnlineCount(0);
    }

    return(
        <>
            <p>Online: {countCtx?.onlineCount}</p>
            <button 
                className="border border-orange-900 rounded-lg px-2" 
                onClick={handleBanAll}>Banir todo mundo</button>
        </>
    );
}