import styles from'./ToDoContainer.module.css';
import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoContainer() {
  return ( 
    <div class={styles.task_container}>
         <ToDoItem/>
    </div>
  );
}

export default ToDoContainer;