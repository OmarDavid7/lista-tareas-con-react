import React, { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      <ul className="list-group m-3">
        {tasks.map((task) => (
          <li className="list-group-item mt-2" key={task.id}>
            <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
          </li>
        ))}
      </ul>
    </>
  );
}

const Task = ({task, onChange, onDelete}) => {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if(isEditing){
    taskContent = (
        <>
        <input type="text" value={task.text} className="form-control mt-2" onChange={(e)=> {
            onChange({
                ...task, text: e.target.value
            })
        }} />
        <button className="btn btn-success mx-2 mt-2" onClick={()=> setIsEditing(false)}>Guardar</button>
        </>
    )
  }else{
    taskContent = (
        <>
        {task.text}
        <button className="btn btn-success mx-2 mt-2" onClick={()=> setIsEditing(true)}>Editar</button>
        </>
    )
  }

  return(
    <label>
        <input type="checkbox" 
        className="form-check form-check-input"
        checked={task.done}
        onChange={e => {
            onChange({
                ...task, done: e.target.checked
            })
        }}
        />
        {taskContent}
        <button className="btn btn-danger mt-2" onClick={()=> onDelete(task.id)}>Borrar</button>
    </label>
  )
};
