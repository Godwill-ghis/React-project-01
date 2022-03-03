import React from "react";
import Todos from "./Todos";
import FilterTodo from "./FilterTodo";
import TodoInput from "./TodoInput";

const TodoCompotainer = () => {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TodoInput />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Your Activities</h3>
        <FilterTodo />
      </div>

      <Todos />
    </div>
  );
};

export default TodoCompotainer;
