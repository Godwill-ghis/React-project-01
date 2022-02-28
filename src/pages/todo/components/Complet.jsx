import React from "react";
import Button from "./Button";
import TodoStatus from "./TodoStatus";
import Delete from "./Delete";

const Complet = ({ isCompleted, handleDeleteTodo, handleComplete }) => {
  const buttonText = isCompleted ? "Add" : "Completed";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Delete handleDeleteTodo={handleDeleteTodo} />
      {isCompleted ? (
        <TodoStatus isCompleted={isCompleted} />
      ) : (
        <>
          <Button handleComplete={handleComplete} buttonText={buttonText} />
          <TodoStatus isCompleted={isCompleted} />
        </>
      )}
    </div>
  );
};

export default Complet;
