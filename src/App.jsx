import './App.css'
import { useEffect, useReducer } from 'react'
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

let nextId = 2;
const initialState = [{id : 0, text: "Estudiar programación", done: false}];

const tareaReducer = (task, action)=>{
  switch(action.type){
    case 'added':{
      return[...task, {
        id: action.id,
        text: action.text,
        done: false
      }]
    }

    case 'changed':{
      return task.map(t =>{
        if(t.id === action.task.id){
          return action.task;
        }else{
          return t
        }
      });
    }

    case 'deleted': {
      return task.filter(t => t.id !== action.id)
    }

    default:{
      throw Error('Unknown action: ' + action.type);  
    }
  }
}


function App() {

  const [ tasks, dispatch] = useReducer(tareaReducer, initialState);

  const handleAddTask = (text)=>{
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  const handleChangeTask = (task)=>{
    dispatch({
      type: 'changed',
      task: task
    })
  }

  const handleDeleteTask = (taskId)=>{
    dispatch({
      type: 'deleted',
      id: taskId
    })
  }

  return (
    <>  
    <h1 className='text-center text-primary py-2'>Tareas</h1>
    <AddTask OnAddTask={handleAddTask}/>
    <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}



export default App
