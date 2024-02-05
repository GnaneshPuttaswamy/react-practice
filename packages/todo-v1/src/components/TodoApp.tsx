import React, { CSSProperties } from "react";
import { Layout } from "antd";
import TodoInputForm from "./TodoInputForm";
import TodoList from "./TodoList";
const { Header, Content } = Layout;

const layoutStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

const headerStyle: CSSProperties = {
  color: "white",
  backgroundColor: "none",
  fontSize: "24px",
};

const contentStyle: CSSProperties = {
  width: "50%",
  margin: "auto",
};

function TodoApp() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Todo V1</Header>
      <Content style={contentStyle}>
        <TodoInputForm />
        <TodoList />
      </Content>
    </Layout>
  );
}

export default TodoApp;
