import React from "react";
import useTodoContext from "./CustonHook/useTodoContex";

const Delete = () => {
  const { todo, dispatch, filterTodo } = useTodoContext();
  const handleDeleteTodo = (e) => {
    const todo = parseFloat(
      e.target.parentNode.parentNode.parentNode.getAttribute("id")
    );
    if (filterTodo !== null) {
      dispatch({
        type: "DELETEFILTERED_TODO",
        payload: { filterTodos: { id: todo } },
      });
      dispatch({ type: "DELETE_TODO", payload: { todos: { id: todo } } });
    }
  };
  return (
    <div
      style={{
        width: "20px",
        height: "20px",
        marginRight: "20px",
      }}
    >
      <img
        style={{
          width: "30px",
          height: "30px",
          display: "block",
          color: "#6ACE85",
        }}
        onClick={handleDeleteTodo}
        src='data:image/png;base64,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'
        alt=''
      />
    </div>
  );
};

export default Delete;
