import { v4 as uuidv4 } from "uuid";
import { Todo } from "../components/TodoApp";

type ActionType = "ADD" | "EDIT" | "DELETE" | "TOGGLE";

export interface BaseAction {
  type: ActionType;
}

export interface AddAction extends BaseAction {
  type: "ADD";
  task: string;
}

export interface EditAction extends BaseAction {
  type: "EDIT";
  id: string;
  title: string;
}

export interface DeleteAction extends BaseAction {
  type: "DELETE";
  id: string;
}

export interface ToggleAction extends BaseAction {
  type: "TOGGLE";
  id: string;
}

export type TodoAction = AddAction | EditAction | DeleteAction | ToggleAction;

const todoReducer = (state: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD": {
      console.log("-- Inside ADD --");
      const newTodos: Todo[] = [
        ...state,
        {
          id: uuidv4(),
          title: action.task,
          isCompleted: false,
        },
      ];

      return newTodos;
    }
    case "EDIT": {
      console.log("-- Inside EDIT --");
      console.log("action =====> ", action);

      // return state.map((todo: Todo) =>
      //   todo.id === action.id ? { ...todo, task: action.title } : todo
      // );
      return state.map(
        (todo: Todo): Todo =>
          todo.id === action.id ? { ...todo, title: "Rama" } : todo
      );
    }
    case "DELETE": {
      console.log("-- Inside DELETE --");
      return state.filter((todo: Todo) => todo.id !== action.id);
    }
    case "TOGGLE": {
      console.log("-- Inside TOGGLE --");
      return state.map((todo: Todo) =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
