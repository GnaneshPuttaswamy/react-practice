import { createContext } from "react";
import { Todo } from "../components/TodoApp";
import useTodoState from "../customHooks/useTodoState";

interface TodoContextProps {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: (title: string) => {
    console.log("Inside default addTodo() : title =====> ", title);
  },
  toggleTodo: (id: string) => {
    console.log("Inside default toggleTodo() : title =====> ", id);
  },
  editTodo: (id: string, title: string) => {
    console.log("Inside default addTodo() : id =====> ", id);
    console.log("Inside default addTodo() : title =====> ", title);
  },
  deleteTodo: (id: string) => {
    console.log("Inside default addTodo() : id =====> ", id);
  },
});

const TodoProvider = (props: any) => {
  const todosData = useTodoState();
  console.log("todosData =====>", todosData);

  return (
    <TodoContext.Provider value={todosData}>
      {props.children}
    </TodoContext.Provider>
  );
};

TodoContext.displayName = "TodoContext";
TodoProvider.displayName = "TodoProvider";

export { TodoContext, TodoProvider };
