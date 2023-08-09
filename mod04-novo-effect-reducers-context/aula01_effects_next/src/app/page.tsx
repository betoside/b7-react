"use client"

import { useState } from "react";
import { Square } from "@/components/Square";

const Page = () => {

  const [show, setShow] = useState(false);

  return (
    <div className=''>

      <button 
        className="bg-blue-400 rounded-md p-3 text-black mb-2" 
        onClick={ () => setShow(!show) }
      >show / hide</button>

      <hr className="mb-2" />

      {show && <Square />}

    </div>
  )
}

export default Page;