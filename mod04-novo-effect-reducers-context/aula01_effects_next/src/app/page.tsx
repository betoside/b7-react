"use client"

import { Header } from "@/components/Header";
import { CountContext } from "@/contexts/CountContext";
import { useState } from "react";

const Page = () => {

  // se criar uma state, que é uma caixinha.
  // colocar um nro dentro.
  // pega essa state e joga no contexto.
  // entao tendo a state no contexto significaque que
  // agora pode alterar o valor da state.

  // nao pode alterar a propria state, trocar ela por um array
  // ou por outra state. é possível alterar o valor dela.

  const [onlineCount, setOnlineCount] = useState(92);
  
  return (
    <div className='container mx-auto text-white p-9'>

      <CountContext.Provider value={{onlineCount, setOnlineCount}}>
        <Header />
      </CountContext.Provider>
      
    </div>
  )
}

export default Page;