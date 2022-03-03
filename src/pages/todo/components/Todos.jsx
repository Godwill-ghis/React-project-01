import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext, { FilteredTodoContext } from "./todoContext/TodoContext";

const Todos = () => {
  const todos = useContext(TodoContext).todo;
  const filterTodo = useContext(FilteredTodoContext).filterTodo;
  const todoInput = filterTodo === null ? todos : filterTodo;
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
