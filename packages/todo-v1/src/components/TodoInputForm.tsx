import { Form, Input } from "antd";
import React from "react";

type FieldType = {
  todoText?: string;
};

function TodoInputForm() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="todo-input-form"
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
        <Input placeholder="Offload your mind: Enter a task and focus elsewhere" />
      </Form.Item>
    </Form>
  );
}

export default TodoInputForm;
