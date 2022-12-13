import "../css/TodoList.css";
import TodoListItem from "./TodoListItem";

function TodoList({ lists, onDelete }) {
  return (
    <ul>
      {"total : " + lists.length}
      {lists.map((list, idx) => {
        return (
          <li key={idx} className="listItems">
            <TodoListItem item={list} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
