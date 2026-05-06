import TodoItem from "./TodoItem";
import "./TodoList.css";
import type { Todo } from "../App";
import { useState, type ChangeEvent } from "react";

interface TodoListProps {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

export default function TodoList({ todos, onUpdate, onDelete }: TodoListProps) {
  const [search, setSearch] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearchResult = (): Todo[] => {
    return search === ""
      ? todos
      : todos.filter((todo) => todo.content.includes(search));
  };

  const analyzeTodo = () => {
    console.log("analyzeTodo 호출");

    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };

  const { totalCount, doneCount, notDoneCount } = analyzeTodo();

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총갯수:{totalCount}</div>
        <div>완료된 할일:{doneCount}</div>
        <div>아직 완료하지 못한 할일:{notDoneCount}</div>
      </div>
      <input
        type="text"
        className="searchbar"
        placeholder="검색어를 입력"
        onChange={onChange}
      />
      <div>
        {getSearchResult().map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onUdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
