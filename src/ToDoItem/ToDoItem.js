import styles from'./ToDoItem.module.css';

function ToDoItem() {
  return ( 
    <div class={styles.item_task}>
        <div class={styles.left_item_task}>
            <input type="checkbox"/>
                <span>Task 1</span>
        </div>
            <div class={styles.right_item_task}>
                <span>10.04.2022</span>
                    <button class={styles.btn_delete}></button>
            </div>
        </div>
  );
}

export default ToDoItem;