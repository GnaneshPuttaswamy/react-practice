import React from "react";
import { Outlet } from "react-router-dom";
import BookList from "./BookList";

function BookLayout() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <div
        className="books-navigation"
        style={{
          backgroundColor: "lightgray",
          height: "100%",
          display: "inline-block",
          width: "20%",
        }}
      >
        <BookList />
      </div>
      <div
        style={{
          backgroundColor: "lightblue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
        }}
        className="books-main"
      >
        <Outlet context={{ hello: "World!!" }} />
      </div>
    </div>
  );
}

export default BookLayout;
