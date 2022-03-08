import React from "react";
import useTodoContext from "./CustonHook/useTodoContex";

const ClearTodos = () => {
  const { dispatch } = useTodoContext();

  const handleClearTodo = () => {
    dispatch({ type: "CLEAR_TODO" });
  };
  return (
    <button
      onClick={handleClearTodo}
      style={{ color: "black", width: "80px", height: "30px" }}
    >
      Clear
    </button>
  );
};

export default ClearTodos;
