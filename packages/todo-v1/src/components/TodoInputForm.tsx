import { Form, Input } from "antd";
import React, { useEffect, useRef } from "react";

type FieldType = {
  todoText?: string;
};

interface TodoInputFormProps {
  addTodo: (title: string) => void;
}

const TodoInputForm: React.FC<TodoInputFormProps> = ({ addTodo }) => {
  const [todoInputForm] = Form.useForm();
  const inputRef = useRef(null);
  const [focusInput, setFocusInput] = React.useState(false);

  useEffect(() => {
    if (focusInput) {
      inputRef.current && inputRef.current.focus();
      setFocusInput(false);
    }
  }, [focusInput]);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    addTodo(values.todoText);
    todoInputForm.resetFields();
    setFocusInput(true);
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
        <Input
          ref={inputRef}
          placeholder="Offload your mind: Enter a task and focus elsewhere"
        />
      </Form.Item>
    </Form>
  );
};

TodoInputForm.displayName = "TodoInputForm";
export default TodoInputForm;
