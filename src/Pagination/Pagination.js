import styles from'./Pagination.module.css';

function Pagination() {
  return ( 
    <div class={styles.list_buttons}>
        <button class={styles.btn_pagination}>←</button>
        <button class={styles.btn_pagination}>1</button>
        <button class={styles.btn_pagination}>2</button>
        <button class={styles.btn_pagination}>3</button>
        <button class={styles.btn_pagination}>→</button>
 </div>
  );
}

export default Pagination;
