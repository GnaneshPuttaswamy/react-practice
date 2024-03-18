import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function BookList() {
  const bookIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h2>Books List</h2>
      {bookIds.map((id) => (
        <h3 key={id}>
          <Link to={`/books/${id}`}>Book {id}</Link>
        </h3>
      ))}
      <Link to="/books/new">Add new book</Link>
    </>
  );
}

export default BookList;
