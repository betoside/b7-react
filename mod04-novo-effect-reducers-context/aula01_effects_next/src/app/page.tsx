"use client"

import { Header } from "@/components/Header";
import { CountContext, CountInitialData } from "@/contexts/CountContext";

const Page = () => {
  
  return (
    <div className='container mx-auto text-white p-9'>

      <CountContext.Provider value={CountInitialData}>
        <Header />
      </CountContext.Provider>
      
      {/* 
      Etapa 1 criada. o contexto: CountContext
      Etapa 2, montar o provider: <CountContext.Provider value={CountInitialData}>
      Etapa 3, como é que eu leio as informações do meu contexto
      */}
      
    </div>
  )
}

export default Page;