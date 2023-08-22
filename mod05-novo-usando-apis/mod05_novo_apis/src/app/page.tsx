"use client";

import { api } from '@/utils/api';
import axios from 'axios';

export default function Home() {

  const hanleDeletePosts = async ()=>{
    // ...
  }

  const hanleGetPosts = async ()=>{
    // ...
  }

  const handleAddPost = async ()=>{

    const requestParams = {
      userId: 98,
      title: 'Titulo do post',
      body: 'Corpo do post'
    };

    const response = await api.post('/posts',{
      params: requestParams
    });

    if(response.data.id){
      console.log('Inseriu bonitinho');
    } else {
      console.log('Não Inseriu, algo aconteceu.');
    }

  }

  return (
    <div className="container mx-auto p-6">

      <button onClick={handleAddPost} className='border rounded-lg bg-gray-500 px-2 my-2'>Inserir Post</button>

    </div>
  );
}
