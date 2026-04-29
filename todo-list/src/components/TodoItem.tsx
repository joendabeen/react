import "./TodoItem.css";
import type { Todo } from "../App";

interface TodoItemProps {
  todo: Todo;
  onUdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

export default function TodoItem({ todo, onUdate, onDelete }: TodoItemProps) {
  const onChangeCheckBox = () => {
    onUdate(todo.id);
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
