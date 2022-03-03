import React from "react";
import Button from "./Button";
import TodoStatus from "./TodoStatus";
import Delete from "./Delete";

const Complet = ({ isCompleted }) => {
  const buttonText = isCompleted ? "Add" : "Completed";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Delete />
      {isCompleted ? (
        <TodoStatus isCompleted={isCompleted} />
      ) : (
        <>
          <Button buttonText={buttonText} />
          <TodoStatus isCompleted={isCompleted} />
        </>
      )}
    </div>
  );
};

export default Complet;
