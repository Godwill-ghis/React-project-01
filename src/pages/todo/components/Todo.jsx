import React from "react";
import Complet from "./Complet";

const Todo = ({
  handleDeleteTodo,
  todoText,
  isCompleted,
  id,
  handleComplete,
}) => {
  return (
    <div
      id={id}
      style={{
        width: "100%",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid #707070",
        margin: "1rem 0",
        padding: "0.2rem",
      }}
    >
      <p>{todoText}</p>
      <Complet
        isCompleted={isCompleted}
        handleDeleteTodo={handleDeleteTodo}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default Todo;
