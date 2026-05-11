import "./TodoItem.css";
import type { Todo } from "../App";
import { memo } from "react";

interface TodoItemProps {
  todo: Todo;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
  console.log("todo item");

  const onChangeCheckBox = () => {
    console.log("todo update");
    onUpdate(todo.id);
  };

  const onDeleteTodo = () => {
    console.log("todo delete");
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
// export default TodoItem;
