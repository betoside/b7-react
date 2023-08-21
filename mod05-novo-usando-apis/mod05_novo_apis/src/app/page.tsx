"use client";

import { User } from '@/types/User';
import { useEffect, useState } from 'react';

export default function Home() {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    setLoading(true);
    try {

      const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await resposta.json();
      setUsers(json);

    } catch(err) {
      console.log('DEU ALGO ERRADO.')
    }
    setLoading(false);
  }

  useEffect(() => {

    getUsers();

  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl">Lista de usuários</h1>

      {loading && "Carregando..."}
      {!loading && users.length > 0 &&
        <ul>
          {users.map(item => (
          <li key={item.id}>{item.name} - ({item.email}). {item.address.city} </li>
          ))}
        </ul>
      }
      {!loading && users.length === 0 && 'Não há users para exibir.'}


    </div>
  );
}
