import React from "react";
import Todo from "./Todo";

const Todos = ({ todoInput, handleDeleteTodo, handleComplete }) => {
  return (
    <div
      style={{
        color: "#707070",
        backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {todoInput.map((todo) => {
        return (
          <Todo
            handleDeleteTodo={handleDeleteTodo}
            isCompleted={todo.completed}
            todoText={todo.todoText}
            key={todo.id}
            id={todo.id}
            handleComplete={handleComplete}
          ></Todo>
        );
      })}
    </div>
  );
};

export default Todos;
