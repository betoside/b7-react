"use client"

import { listReducer } from "@/reducers/listReducer";
import { ItemTarefa } from "@/types/ItemTarefa";
import { useReducer, useState } from "react";


const Page = () => {

  const [list, dispatch] = useReducer(listReducer, []);

  const handleAddClick = () => {

    dispatch({
      type: 'add',
      payload: {
        text: 'Novo item'
      }
    });

  }

  // dispatch({
  //   type: "toggleDone",
  //   payload: {
  //     id: 2
  //   }
  // });

  // dispatch({
  //   type: 'editText',
  //   payload: {
  //     id: 2,
  //     newText: 'Bla Bla Bla'
  //   }
  // });

  // dispatch({
  //   type: "remove",
  //   payload: {
  //     id: 2
  //   }
  // });


  return (
    <div className=''>

      <button
        className="bg-blue-400 rounded-md p-3 text-black mb-2" 
        onClick={handleAddClick}>Adicionar</button>


    </div>
  )
}

export default Page;