"use client";

import { User } from '@/types/User';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  
  const [legendInput, setLegendInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async ()=>{
    // precisa primeiro verificar se existe um arquivo 
    // e se ele faz parte do grupo de arquivos válidos/aceitáveis

    if(fileInputRef.current?.files && fileInputRef.current?.files.length > 0){
      const fileItem = fileInputRef.current.files[0];

      const allowed = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/gif"
      ]

      if(allowed.includes(fileItem.type)){

        const data = new FormData();
        data.append('arquivoDaImage', fileItem);
        data.append('legend', legendInput);

        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-type': 'multipart/form-data'
          },
          body: data
        });

        const json = await res.json();
        console.log(json);

      } else {
        alert('Arquivo incompatível.');
        console.log('Arquivo incompatível.');
      }

    } else {
      alert('Selecione um arquivo');
    }

  }

  return (
    <div className="container mx-auto p-6">
      
      <h1 className='text-2xl'>Upload de Imagem</h1>
      <div className='max-w-md flex flex-col gap-3 border border-dotted border-white p-3 mt-4'>
        <input 
          ref={fileInputRef}
          type="file" 
        />
        <input 
          type="text" 
          placeholder="Digite uma legenda" 
          className='p-3 bg-white-white rounded-md text-black' 
          value={legendInput}
          onChange={e => setLegendInput(e.target.value)}
        />
        <button 
          className='bg-black px-4 py-1 border border-black rounded-lg text-white'
          onClick={handleFileSend}
        >Enviar imagem</button>
      </div>

    </div>
  );
}
