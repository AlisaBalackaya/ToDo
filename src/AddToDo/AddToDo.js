import styles from'./AddToDo.module.css';
import { useState } from 'react';

function AddToDo({todos, setTodos}) {

    let dateTask = new Date();
    const [todo, setTodo] = useState('')
    
  const addNewTodo = () =>{
    if(todo!==''){
        const newTodo = {
            id: Date.now(),
            task: todo,
            date:  `${dateTask.getDate()}.${dateTask.getMonth()}.${dateTask.getFullYear()}`,
            isCompleted: false
        }
    setTodos([...todos, newTodo])
    setTodo('');
    }
  } 
  
  const handleKeyPress = (e) =>{
      if(e.key==='Enter'){
          addNewTodo();
      }
  }
  return ( 
        <div class={styles.input_container}>
        <input type="text" 
        placeholder="I want to..." 
        class={styles.input_task} 
        value={todo} 
        onChange={e=> setTodo(e.target.value)} 
        onKeyDown={handleKeyPress}
        />

        <button onClick={addNewTodo} class={styles.btn_add}>Add</button>
    </div>
  );
}

export default AddToDo;