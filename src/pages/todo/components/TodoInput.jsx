import React, { useContext } from "react";
import TodoContext, { TodoDispatchContext } from "./todoContext/TodoContext";

const TodoInput = () => {
  const id = Math.floor(Math.random() * 100);
  const todos = useContext(TodoContext).todo;
  const setTodoInput = useContext(TodoDispatchContext).setTodo;
  function handleSubmit(e) {
    e.preventDefault();
    const todo = e.target.firstElementChild.value;
    const todos1 = [...todos, { todoText: todo, completed: false, id: id }];
    todo === "" && " " ? alert("please input activity") : setTodoInput(todos1);
    window.localStorage.setItem("myTodos", JSON.stringify(todos1));
    e.target.firstElementChild.value = "";
    e.target.firstElementChild.focus();
  }
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
