"use client"

import { listReducer } from "@/reducers/listReducer";
import { ItemTarefa } from "@/types/ItemTarefa";
import { useReducer, useState } from "react";


const Page = () => {

  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if(addField.trim() === '') return false;

    dispatch({
      type: 'add',
      payload: {
        text: addField.trim()
      }
    });

    setAddField('');
  }

  return (
    <div className='container mx-auto text-white'>

      <h1 className="text-center text-4xl my-4">Lista de tarefas</h1>
      <div className="border border-gray-400 p-4 m-4 bg-gray-900">

        <input 
          type="text" 
          name="nota" 
          value={addField}
          onChange={e => setAddField(e.target.value)}
          placeholder="Escreva uma tarefa"
          className="p-3 mr-3 w-2/3 outline-none bg-transparent border rounded-lg"
         />
        <button
          className="bg-blue-400 rounded-md p-3 text-black mb-2" 
          onClick={handleAddButton}>Adicionar</button>

        
      </div>
      <ul className="p-4 m-4">
        {list.map((item) => (
          <li key={item.id}>{item.id} - {item.text}</li>
        ))}
      </ul>

    </div>
  )
}

export default Page;