import AddToDo from '../AddToDo/AddToDo';
import Pagination from '../Pagination/Pagination';
import SortButtons from '../SortButtons/SortButtons';
import ToDoContainer from '../ToDoContainer/ToDoContainer';
import styles from'./ToDo.module.css';

function ToDo() {
  return (
    <div className={styles.main_content}>
     <h1>To Do</h1>
     <AddToDo/>
     <SortButtons/>
     <ToDoContainer/>
     <Pagination/>
    </div>
  );
}

export default ToDo;
