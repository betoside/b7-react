"use client";

import axios from "axios";

export default function Home() {

  const controller = new AbortController();

  const handleStartRequest = async ()=>{
    try {
      const resonse = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        signal: controller.signal
      });
    } catch(err) {
      console.log('Foi cancelada.');
    }
  }

  const handleCancelRequest = async ()=>{
    controller.abort(); // automaticamente vai para o catch
  }

  return (
    <div className="container mx-auto p-6">

      <button 
        onClick={handleStartRequest} 
        className='border rounded-lg bg-gray-500 px-2 m-2'>Fazer</button>

      <button 
        onClick={handleCancelRequest} 
        className='border rounded-lg bg-gray-500 px-2 m-2'>Cancelar</button>

    </div>
  );
}
