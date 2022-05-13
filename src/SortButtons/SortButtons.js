import styles from'./SortButtons.module.css';

function SortButtons() {
  return ( 
    <div class={styles.sort_buttons}>
            <div class={styles.left_sort_buttons}>
                <button class={styles.btn_sort}>All</button>
                <button class={styles.btn_sort}>Done</button>
                <button class={styles.btn_sort}>Undone</button>
            </div>
            <div class={styles.right_sort_buttons}>
                <div>Sort by date</div>
                <button class={styles.btn_sort}>↓</button>
                <button class={styles.btn_sort}>↑</button>
            </div>
            
        </div>
  );
}

export default SortButtons;
