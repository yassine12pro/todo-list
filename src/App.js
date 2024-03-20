import { useRef, useState } from 'react';
import './App.css';

function App() {
  
  const [todo,setTodo]=useState([])
  const inputref=useRef()
  const handeladdtodo=()=>{
    const text = inputref.current.value
    const newitem = { complited : false , text}
    setTodo([...todo,newitem ])
    inputref.current.value=""
  } 
   const handetext =(index)=>{
    const newtodo =[...todo]
    newtodo[index].complited=!newtodo[index].complited
    setTodo(newtodo)

   }
   const handeldelete =(index)=>{
    const newtodo =[...todo]
    newtodo.splice(index,1)
    setTodo(newtodo)

   }
  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className='todo'>
        <ul>
          {todo.map(({text,complited},index)=>{
            return(
                <div className='text'>
                   <li className={ complited ? "done" : ""} key={index} onClick={()=>handetext(index)}>{text}</li>
                    <span onClick={()=>handeldelete(index)}>X</span>
                </div>
              )
          })}
        </ul>
        <input ref={inputref} placeholder='Enter tasks...' />
        <button onClick={handeladdtodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
