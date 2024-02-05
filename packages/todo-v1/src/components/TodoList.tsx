import React from "react";
import { Button, Checkbox, List, Tooltip } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";
import TodoEditItem from "./TodoEditItem";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
];

const CustomListItemMeta = styled(List.Item.Meta)`
  .ant-list-item-meta-title {
    margin: 0px !important;
  }
`;

function TodoList() {
  return (
    <List
      style={{ height: "85%", overflow: "auto", paddingRight: "10px" }}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item
          key={index}
          actions={[
            <Tooltip title="Edit">
              <Button shape="circle" icon={<EditOutlined />} />
            </Tooltip>,
            <Tooltip title="Delete">
              <Button shape="circle" icon={<DeleteOutlined />} />
            </Tooltip>,
          ]}
        >
          <Checkbox style={{ marginRight: "10px" }} />
          <CustomListItemMeta title={item.title} />
        </List.Item>
      )}
    />
  );
}

export default TodoList;
