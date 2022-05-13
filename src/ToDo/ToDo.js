import AddToDo from '../AddToDo/AddToDo';
import styles from'./ToDo.module.css';

function ToDo() {
  return (
    <div className={styles.main_content}>
     <h1>To Do</h1>
     <AddToDo/>
    </div>
  );
}

export default ToDo;
