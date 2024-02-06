import React from "react";
import { List } from "antd";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoApp";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  editTodo?: (id: string, title: string) => void;
  deleteTodo?: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  editTodo,
  deleteTodo,
}) => {
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
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      )}
    />
  );
};

TodoList.displayName = "TodoList";
export default TodoList;
