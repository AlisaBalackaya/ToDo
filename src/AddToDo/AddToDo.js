import styles from'./AddToDo.module.css';
import { useState } from 'react';

function AddToDo({todos, setTodos}) {
    
    const [todo, setTodo] = useState('')
    
  const addNewTodo = () =>{
    const newTodo = {
        id: Date.now(),
        task: todo
    }

    setTodos([...todos, newTodo])
  }  
  return ( 
        <div class={styles.input_container}>
        <input type="text" placeholder="I want to..." class={styles.input_task} value={todo} onChange={e=> setTodo(e.target.value)}/>
        <button onClick={addNewTodo} class={styles.btn_add}>Add</button>
    </div>
  );
}

export default AddToDo;