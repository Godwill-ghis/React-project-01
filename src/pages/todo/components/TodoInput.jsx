import React from "react";

const TodoInput = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        id='addtodo-input'
        type='text'
        placeholder='Add activities'
      ></input>
      <button type='submit' style={{ color: "red" }}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
