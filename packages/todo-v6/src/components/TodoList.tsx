import React, { useContext } from "react";
import { List } from "antd";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/todo.context";

const TodoList: React.FC = () => {
  const todos = useContext(TodoContext);

  console.log("<-> TODO LIST<->");

  return (
    <List
      style={{ height: "85%", overflow: "auto", paddingRight: "10px" }}
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isCompleted={todo.isCompleted}
        />
      )}
    />
  );
};

TodoList.displayName = "TodoList";
export default TodoList;
