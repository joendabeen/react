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

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
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
