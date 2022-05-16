import AddToDo from '../AddToDo/AddToDo';
import Pagination from '../Pagination/Pagination';
import SortButtons from '../SortButtons/SortButtons';
import ToDoItem from '../ToDoItem/ToDoItem';
import styles from'./ToDo.module.css';

import { useState } from 'react';

function ToDo() {

    const [todos, setTodos] = useState([
        {id:1,task:"First task"}
    ])
    
    //const createTodo = (newTodo) => {
      //  setTodos(...todos, newTodo)
       
   // }

  return (
    <div className={styles.main_content}>
     <h1>To Do</h1>
     <AddToDo todos={todos} setTodos={setTodos}/>
     <SortButtons/>
    {todos.map((todo) => <ToDoItem todo={todo} />) }
     <Pagination/>
    </div>
  );
}

export default ToDo;
