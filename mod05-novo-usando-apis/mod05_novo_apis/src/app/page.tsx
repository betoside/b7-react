"use client";

import { User } from '@/types/User';
import { useEffect, useState } from 'react';

export default function Home() {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com999/users')
      .then((resposta) => {
        return resposta.json();
      })
      .then(json => {
        console.log(json);
        console.log(json[0]);
        setUsers(json);
      })
      .catch(() => {
        console.log('Deu erro');
      })
      .finally(()=>{
        console.log('Terminou toda a requisição')
      })

  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl">Lista de usuários</h1>

      {users.length <= 0 && "Carregando..."}
      {users.length > 0 &&
        <ul>
          {users.map(item => (
          <li key={item.id}>{item.name} - ({item.email}). {item.address.city} </li>
          ))}
        </ul>
      }

    </div>
  );
}
