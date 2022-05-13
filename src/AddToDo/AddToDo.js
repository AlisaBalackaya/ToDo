import styles from'./AddToDo.module.css';

function AddToDo() {
  return ( 
    <div class="input_container">
        <input type="text" placeholder="I want to..." class={styles.input_task}/>
        <button class={styles.btn_add}>Add</button>
    </div>
  );
}

export default AddToDo;