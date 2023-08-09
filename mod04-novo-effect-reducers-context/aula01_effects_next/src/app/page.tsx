"use client"

import { useEffect, useState } from 'react';

const Page = () => {

  const [firstname, setFirstname] = useState<string>('Boniek');
  const [lastname, setLastname] = useState<string>('Lacerd');
  
  const fullname = firstname + ' ' + lastname;

  return (
    <div className=''>

      <p>Meu nome é {fullname}</p>
      <hr />

      <button className='p-2 border rounded-md m-3 border-blue-700' 
        onClick={()=>{setFirstname('Pedro')}}
      >Nome 'Pedro'</button>
      <button className='p-2 border rounded-md m-3 border-blue-700' 
        onClick={()=>{setLastname('Alvares')}}
      >Sobrenome 'Alvares'</button>

    </div>
  )
}

export default Page;