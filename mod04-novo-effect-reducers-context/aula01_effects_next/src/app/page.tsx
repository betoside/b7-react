"use client"

import { Header } from "@/components/Header";
import { CountProvider } from "@/contexts/CountContext";

const Page = () => {
  
  return (
    <div className='container mx-auto text-white p-9'>

      <CountProvider>
        <Header />
      </CountProvider>
      
    </div>
  )
}

export default Page;