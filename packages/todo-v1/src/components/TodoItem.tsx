import React, { useEffect, useRef, useState } from "react";
import { Button, Checkbox, Form, Input, List, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

const CustomListItemMeta = styled(List.Item.Meta)`
  .ant-list-item-meta-title {
    margin: 0px !important;
  }
`;

type FieldType = {
  todotext?: string;
};

const { Text } = Typography;

interface TodoItemProps {
  id: string;
  title: string;
  isCompleted: boolean;
  toggleTodo: (id: string) => void;
  editTodo?: (id: string, title: string) => void;
  deleteTodo?: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  isCompleted,
  toggleTodo,
  editTodo,
  deleteTodo,
}: any) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoEditForm] = Form.useForm();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current && inputRef.current.focus();
    }
  }, [isEditing]);

  const onEditClick = (e: any) => {
    console.log("Edit clicked");
    console.log("isEditing", isEditing);
    setIsEditing(!isEditing);
    todoEditForm.setFieldsValue({ todotext: title });
  };

  const onCancelClick = () => {
    console.log("Cancel clicked");
    setIsEditing(false); // Switch back to view mode
  };

  const handleUpdate = () => {
    const todotextValue = todoEditForm.getFieldValue("todotext");
    editTodo(id, todotextValue);
    setIsEditing(!isEditing);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const actions = isEditing
    ? [
        <Button
          onClick={handleUpdate}
          shape="circle"
          icon={<CheckOutlined />}
        />,
        <Button
          onClick={onCancelClick}
          shape="circle"
          icon={<CloseOutlined />}
        />,
      ]
    : [
        <Button onClick={onEditClick} shape="circle" icon={<EditOutlined />} />,
        <Button
          onClick={() => deleteTodo(id)}
          shape="circle"
          icon={<DeleteOutlined />}
        />,
      ];

  return (
    <List.Item key={id} actions={actions}>
      <Checkbox
        onClick={() => toggleTodo(id)}
        checked={isCompleted}
        style={{ marginRight: "10px" }}
      />
      {isEditing ? (
        <Form
          form={todoEditForm}
          style={{ width: "100%", margin: "0" }}
          name="todo-edit-form"
          onFinish={handleUpdate}
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
              ref={inputRef}
              style={{
                fontWeight: "bold",
              }}
              value={title}
              placeholder="Offload your mind: Enter a task and focus elsewhere"
            />
          </Form.Item>
        </Form>
      ) : (
        <CustomListItemMeta title={<Text delete={isCompleted}>{title}</Text>} />
      )}
    </List.Item>
  );
};

TodoItem.displayName = "TodoItem";
export default TodoItem;
