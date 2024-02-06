import { Form, Input } from "antd";
import React, { useContext, useEffect, useRef } from "react";
import useToggleState from "../customHooks/useToggleState";
import { TodoContext } from "../context/todo.context";

type FieldType = {
  todoText?: string;
};

const TodoInputForm: React.FC = () => {
  const [todoInputForm] = Form.useForm();
  const inputRef = useRef(null);
  const [focusInput, toggleFocusInput] = useToggleState(false);
  const { addTodo } = useContext(TodoContext);

  console.log("Inside TodoInputForm");

  useEffect(() => {
    if (focusInput) {
      inputRef.current && inputRef.current.focus();
      toggleFocusInput();
    }
  }, [focusInput]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    addTodo(values.todoText);
    todoInputForm.resetFields();
    toggleFocusInput();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="todo-input-form"
      form={todoInputForm}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{
        margin: "10px 0",
      }}
      size="large"
    >
      <Form.Item<FieldType>
        name="todoText"
        style={{ margin: "0" }}
        rules={[
          {
            required: true,
            message: "Please enter a task to clear your mind.",
          },
        ]}
      >
        <Input ref={inputRef} placeholder="Offload your mind" />
      </Form.Item>
    </Form>
  );
};

TodoInputForm.displayName = "TodoInputForm";
export default TodoInputForm;
