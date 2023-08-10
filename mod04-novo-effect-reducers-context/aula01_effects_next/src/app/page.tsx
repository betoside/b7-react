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

  const handleDoneCheckbox = (id: number) => {
    dispatch({
      type: "toggleDone",
      payload: { id }
    });
  }

  const handleEdit = (id: number) => {
    const item = list.find(it => it.id === id);
    if(!item) return false;

    const newText = window.prompt('Editar Tarefa', item.text);
    if (!newText || newText?.trim() === '') return false;

    dispatch({
      type: 'editText',
      payload: { id, newText }
    });
  }

  const handleRemove = (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir?')) return false;
    dispatch({
      type: "remove",
      payload: { id }
    });
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
          <li key={item.id} className="flex justify-between border-b border-b-gray-900 pb-2 mb-2">
            <input type="checkbox" 
              className="w-6 h-6 mr-4"
              defaultChecked={item.done}
              onClick={() => handleDoneCheckbox(item.id)}
            />
            <p className="flex-1 txt-lg">{item.text}</p>
            <button onClick={() => handleEdit(item.id)} className="mx-2">Editar</button>
            <button onClick={() => handleRemove(item.id)} className="mx-2 text-red-700">Excluir</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Page;