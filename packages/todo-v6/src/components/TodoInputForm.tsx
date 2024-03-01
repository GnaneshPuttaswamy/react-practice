import { Form, Input } from "antd";
import React, { useContext, useEffect, useRef } from "react";
import useToggleState from "../customHooks/useToggleState";
import { DispatcherContext } from "../context/todo.context";
import { AddAction } from "../reducers/todo.reducer";

type FieldType = {
  todoText?: string;
};

const TodoInputForm: React.FC = () => {
  const [todoInputForm] = Form.useForm();
  const inputRef = useRef(null);
  const [focusInput, toggleFocusInput] = useToggleState(false);
  const dispatch = useContext(DispatcherContext);

  console.log("<-> TODO INPUT FORM<->");

  useEffect(() => {
    if (focusInput) {
      inputRef.current && inputRef.current.focus();
      toggleFocusInput();
    }
  }, [focusInput]);

  const onFinish = (values: any) => {
    console.log("Success:", values);

    const addActionObj: AddAction = {
      type: "ADD",
      task: values.todoText,
    };
    dispatch(addActionObj);
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
