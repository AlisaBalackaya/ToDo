import styles from'./ToDoItem.module.css';

function ToDoItem(props) {
  return ( 
<div class={styles.task_container}>
    <div class={styles.item_task}>
        <div class={styles.left_item_task}>
            <input type="checkbox"/>
                <span>{props.todo.task}</span>
        </div>
            <div class={styles.right_item_task}>
                <span>{props.todo.date}</span>
                    <button onClick={() => props.removeTodo(props.todo)} class={styles.btn_delete}></button>
            </div>
        </div>
    </div>
  );
}

export default ToDoItem;