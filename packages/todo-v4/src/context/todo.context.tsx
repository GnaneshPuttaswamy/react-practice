import { Dispatch, createContext, useReducer } from "react";
import { Todo } from "../components/TodoApp";
import todoReducer, { TodoAction } from "../reducers/todo.reducer";

interface TodoContextProps {
  todos: Todo[];
  dispatch: Dispatch<TodoAction>;
}

const TodoContext = createContext<TodoContextProps>({
  todos: [],
  dispatch: () => {
    console.log("Inside default dispatch()");
  },
});

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

const TodoProvider = (props: any) => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  console.log("todosData =====>", todos);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

TodoContext.displayName = "TodoContext";
TodoProvider.displayName = "TodoProvider";

export { TodoContext, TodoProvider };
