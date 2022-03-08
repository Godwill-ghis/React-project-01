import React from "react";
import Todo from "./Todo";
import useTodoContext from "./CustonHook/useTodoContex";

const Todos = () => {
  const { todo, filterTodo, isFiltered } = useTodoContext();
  const todoInput = isFiltered ? filterTodo : todo;
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
            isCompleted={todo.completed}
            todoText={todo.todoText}
            key={todo.id}
            id={todo.id}
          ></Todo>
        );
      })}
    </div>
  );
};

export default Todos;
