import React, { useContext, useEffect, useRef } from "react";
import { Button, Checkbox, Form, Input, List, Typography } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CheckOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import useToggleState from "../customHooks/useToggleState";
import { DispatcherContext } from "../context/todo.context";
import { EditAction } from "../reducers/todo.reducer";

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
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, isCompleted }: any) => {
  const [isEditing, toggleIsEditing] = useToggleState(false);
  const [todoEditForm] = Form.useForm();
  const inputRef = useRef(null);
  const dispatch = useContext(DispatcherContext);

  console.log("<-> TODO ITEM<->");

  useEffect(() => {
    if (isEditing) {
      inputRef.current && inputRef.current.focus();
    }
  }, [isEditing]);

  const onEditClick = (e: any) => {
    console.log("Edit clicked");
    console.log("isEditing", isEditing);
    toggleIsEditing();
    todoEditForm.setFieldsValue({ todotext: title });
  };

  const onCancelClick = () => {
    console.log("Cancel clicked");
    toggleIsEditing();
  };

  const handleUpdate = () => {
    const todotextValue = todoEditForm.getFieldValue("todotext");
    const editAction: EditAction = {
      type: "EDIT",
      id,
      title: todotextValue,
    };
    console.log("editAction =====> ", editAction);

    dispatch(editAction);
    toggleIsEditing();
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
          onClick={() => dispatch({ type: "DELETE", id })}
          shape="circle"
          icon={<DeleteOutlined />}
        />,
      ];

  return (
    <List.Item key={id} actions={actions}>
      <Checkbox
        onClick={() => dispatch({ type: "TOGGLE", id })}
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
              placeholder="Updated idea?"
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
