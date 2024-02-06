import React, { CSSProperties, useState } from "react";
import { Layout } from "antd";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
const { Header, Content } = Layout;
import { v4 as uuidv4 } from "uuid";

const layoutStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

const headerStyle: CSSProperties = {
  color: "white",
  backgroundColor: "none",
  fontSize: "24px",
};

const contentStyle: CSSProperties = {
  width: "50%",
  margin: "auto",
};

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

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

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (title: string): void => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string): void => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }

      return { ...todo };
    });

    setTodos(updatedTodos);
  };

  const editTodo = (id: string, title: string): void => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }

      return { ...todo };
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Todo V1</Header>
      <Content style={contentStyle}>
        <TodoInputForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      </Content>
    </Layout>
  );
};

TodoApp.displayName = "TodoApp";
export default TodoApp;
