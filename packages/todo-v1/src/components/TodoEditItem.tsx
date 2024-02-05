import React from "react";
import { Button, Checkbox, Form, Input, List, Tooltip } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

type FieldType = {
  todotext?: string;
};

function TodoEditItem() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <List.Item
      actions={[
        <Tooltip title="Done">
          <Button shape="circle" icon={<CheckOutlined />} />
        </Tooltip>,
        <Tooltip title="Cancel">
          <Button shape="circle" icon={<CloseOutlined />} />
        </Tooltip>,
      ]}
    >
      <Checkbox style={{ marginRight: "10px", visibility: "hidden" }} />
      <Form
        style={{ width: "100%", margin: "0" }}
        name="todo-edit-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        variant="filled"
      >
        <Form.Item<FieldType>
          name="todotext"
          rules={[
            {
              required: true,
              message: "Cannot be empty.",
            },
          ]}
          style={{
            margin: "0",
          }}
        >
          <Input
            style={{
              fontSize: "20px",
              fontWeight: "normal",
            }}
            placeholder="Offload your mind: Enter a task and focus elsewhere"
          />
        </Form.Item>
      </Form>
    </List.Item>
  );
}

export default TodoEditItem;
