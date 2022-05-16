import ToDoItem from "../ToDoItem/ToDoItem";

function TodoContainer({todos, removeTodo}) {
  return (
    <div>
     {todos.map((todo) => <ToDoItem removeTodo={removeTodo} todo={todo} />) }
    </div>
  );
}

export default TodoContainer;
