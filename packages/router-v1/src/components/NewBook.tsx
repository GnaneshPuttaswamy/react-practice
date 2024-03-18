import React from "react";
import { useOutletContext } from "react-router-dom";

function NewBook() {
  const outletContextObj = useOutletContext();
  console.log(outletContextObj);
  return <div>New Book</div>;
}

export default NewBook;
