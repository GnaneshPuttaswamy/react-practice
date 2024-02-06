import { useState } from "react";
import { Todo } from "../components/TodoApp";
import { v4 as uuidv4 } from "uuid";

const initialTodos: Todo[] = [
  {
    id: "1",
    title: "Todo 1",
    isCompleted: false,
  },
  {
    id: "2",
    title: "Todo 2",
    isCompleted: true,
  },
  {
    id: "3",
    title: "Todo 3",
    isCompleted: true,
  },
  {
    id: "4",
    title: "Todo 4",
    isCompleted: false,
  },
];

const useTodoState = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return {
    todos,
    addTodo: (title: string): void => {
      const newTodo: Todo = {
        id: uuidv4(),
        title,
        isCompleted: false,
      };

      setTodos([...todos, newTodo]);
    },
    toggleTodo: (id: string): void => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        return { ...todo };
      });

      setTodos(updatedTodos);
    },
    editTodo: (id: string, title: string): void => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title };
        }

        return { ...todo };
      });

      setTodos(updatedTodos);
    },
    deleteTodo: (id: string): void => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    },
  };
};

useTodoState.displayName = "useTodoState";
export default useTodoState;
