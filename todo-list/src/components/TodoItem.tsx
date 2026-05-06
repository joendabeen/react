import "./TodoItem.css";
import type { Todo } from "../App";
import { useContext, memo } from "react";
import { TodoDispatchContext } from "../TodoContext";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  console.log("2 TodoItem 업데이트");

  const onChangeCheckBox = () => {
    onUpdate(todo.id);
  };

  const onDeleteTodo = () => {
    onDelete(todo.id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={onChangeCheckBox}
        />
      </div>
      <div className="title_col">{todo.content}</div>
      <div className="date_col">
        {new Date(todo.createDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onDeleteTodo}>삭제</button>
      </div>
    </div>
  );
}

export default memo(TodoItem);
