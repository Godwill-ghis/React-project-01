import React, { useContext } from "react";
import TodoContext, {
  TodoDispatchContext,
  FilteredTodoContext,
  FilteredTodoDispatchContext,
} from "./todoContext/TodoContext";

const Button = ({ buttonText }) => {
  const inputTodo = useContext(TodoContext).todo;
  const setTodoInput = useContext(TodoDispatchContext).setTodo;
  const filterinputTodo = useContext(FilteredTodoContext).filterTodo;
  const setFilterTodo = useContext(FilteredTodoDispatchContext).setFilterTodo;
  const handleComplete = (e) => {
    const todoId = e.target.parentNode.parentNode.getAttribute("id");
    if (filterinputTodo !== null) {
      const findfilterTodo = filterinputTodo.find(
        (todo) => todo.id === parseFloat(todoId)
      );
      findfilterTodo.completed = true;
      setFilterTodo(filterinputTodo);
    }
    console.log(inputTodo);
    const findInputTodo = inputTodo.find((todo) => {
      return todo.id === parseFloat(todoId);
    });
    findInputTodo.completed = true;
    window.localStorage.setItem("myTodos", JSON.stringify(inputTodo));
    setTodoInput(JSON.parse(window.localStorage.getItem("myTodos")));
  };
  return (
    <button
      onClick={handleComplete}
      style={{
        backgroundColor: buttonText === "Completed" ? "#6ACE85" : "white",
        border: "none",
        padding: "0.6rem 0.7rem",
        borderRadius: "15px",
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
