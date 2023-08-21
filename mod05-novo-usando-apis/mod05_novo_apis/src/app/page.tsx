"use client";

import axios from 'axios';

export default function Home() {

  const handleGetPost = async ()=>{
    // fetch > then > catch > finally
    // async > await
    // https://jsonplaceholder.typicode.com/comments?postId=1
    // https://jsonplaceholder.typicode.com/posts

    const requestParams = {
      postId: 1,
      sort: 'desc'
    };

    const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
      params: requestParams
    })

    console.log(response.data);

  }

  return (
    <div className="container mx-auto p-6">

      <button onClick={handleGetPost} className='border rounded-lg bg-gray-500 px-2 my-2'>Pegar Posts</button>

    </div>
  );
}
