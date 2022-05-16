import AddToDo from '../AddToDo/AddToDo';
import Pagination from '../Pagination/Pagination';
import SortButtons from '../SortButtons/SortButtons';
import TodoContainer from '../TodoContainer/TodoContainer';
import styles from'./ToDo.module.css';

import { useState } from 'react';

function ToDo() {

    const [todos, setTodos] = useState([ ])

    const removeTodo = (todo) =>{
        setTodos(todos.filter(td => td.id !== todo.id))
    }

  return (
    <div className={styles.main_content}>
     <h1>To Do</h1>
     <AddToDo todos={todos} setTodos={setTodos}/>
     <SortButtons/>
     <TodoContainer todos={todos} removeTodo={removeTodo}/>
     <Pagination/>
    </div>
  );
}

export default ToDo;
