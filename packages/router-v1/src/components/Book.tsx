import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();
  const outletContextObj = useOutletContext();
  console.log(outletContextObj);
  return <div>Book {id}</div>;
}

export default Book;
