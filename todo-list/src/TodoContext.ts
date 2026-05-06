import { createContext } from "react";
import type { Todo } from "./App";

// interface TodoContextType {
//   todos: Todo[];
//   onCreate: (content: string) => void;
//   onUpdate: (id: number) => void;
//   onDelete: (id: number) => void;
// }

// const TodoContext = createContext<TodoContextType>({
//   todos: [],
//   onCreate: (content: string) => {},
//   onUpdate: (id: number) => {},
//   onDelete: (id: number) => {},
// });

// export default TodoContext;

interface TodoStateContextType {
  todos: Todo[];
}

export const TodoStateContext = createContext<TodoStateContextType>({
  todos: [],
});

interface TodoDispatchContextType {
  onCreate: (content: string) => void;
  onUpdate: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoDispatchContext = createContext<TodoDispatchContextType>({
  onCreate: (content: string) => {},
  onUpdate: (id: number) => {},
  onDelete: (id: number) => {},
});
