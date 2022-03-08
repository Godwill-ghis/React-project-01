import React, { useRef } from "react";
import useTodoContext from "./CustonHook/useTodoContex";

const TodoInput = () => {
  const { dispatch } = useTodoContext();
  const id = Math.floor(Math.random() * 100);
  const todoTextRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.firstElementChild.value;
    value === " "
      ? alert("please input activity")
      : dispatch({
          type: "ADD_TODO",
          payload: { todos: { todoText: value, id: id } },
        });
    todoTextRef.current.value = "";
    todoTextRef.current.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        id='addtodo-input'
        type='text'
        placeholder='Add activities'
        ref={todoTextRef}
      ></input>
      <button type='submit' style={{ color: "red" }}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
