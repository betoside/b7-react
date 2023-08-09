"use client"

import { useEffect, useState } from 'react';

const Page = () => {

  // 1. Definição da função que vai rodar.
  // 2. Definição de QUANDO vai rodar.
  // 3. Definição do que fazer quando o componente sumir/unload.

  const [name, setName] = useState('Boniek');
  const [age, setAge] = useState(90);

  useEffect(() => {
    console.log('RODOU O EFFECT...');
  }, [name]);

  const handlePedroClick = ()=>{
    setName('Pedro');
  }

  return (
    <div className=''>

      <p>Meu nome é {name}, com idade de {age}</p>

      <button className='p-2 border rounded-md m-3 border-blue-700' onClick={()=>{setName('Pedro')}}>Mudar para Pedro</button>
      <button className='p-2 border rounded-md m-3 border-blue-700' onClick={()=>{setName('João')}}>Mudar para João</button>
      <button className='p-2 border rounded-md m-3 border-blue-700' onClick={()=>{setAge(10)}}>Mudar para 10 anos</button>
      <button className='p-2 border rounded-md m-3 border-blue-700' onClick={()=>{setAge(90)}}>Mudar para 90 anos</button>

    </div>
  )
}

export default Page;