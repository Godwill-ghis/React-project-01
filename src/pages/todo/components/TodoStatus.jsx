import React from "react";

const TodoStatus = ({ isCompleted }) => {
  return (
    <div
      style={{
        width: "10px",
        height: "10px",
        backgroundColor: isCompleted ? "#6ACE85" : "red",
        borderRadius: "50%",
        marginLeft: "1rem",
      }}
    ></div>
  );
};

export default TodoStatus;
