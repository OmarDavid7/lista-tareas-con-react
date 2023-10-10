import React, { useEffect } from 'react'
import { useState } from 'react'
export default function AddTask({OnAddTask}) {

 const [text, setText] = useState('');

  return (
   <>
  <form className='m-3'>
  <input className='form-control' type="text" value={text} placeholder='agregar tarea' onChange={(e)=> setText(e.target.value)} />
   <button className='btn btn-primary my-2 w-100' onClick={(e) => {
    e.preventDefault();
    setText('');
    OnAddTask(text);
   }}>agregar</button>
  </form>
   </>
  )
}
