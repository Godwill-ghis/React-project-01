import React from "react";
import useTodoContext from "./CustonHook/useTodoContex";

const Button = ({ buttonText }) => {
  // const inputTodo = useContext(TodoContext).todo;
  const { dispatch, filterTodo } = useTodoContext();
  const handleComplete = (e) => {
    const todoId = parseFloat(
      e.target.parentNode.parentNode.getAttribute("id")
    );
    if (filterTodo !== null) {
      dispatch({
        type: "EDITFILTEREDCOMPLETE_TODO",
        payload: { filterTodos: { completed: todoId } },
      });
      // const findfilterTodo = filterinputTodo.find(
      //   (todo) => todo.id === parseFloat(todoId)
      // );
      // findfilterTodo.completed = true;
      // setFilterTodo(filterinputTodo);
    }
    // console.log(inputTodo);
    // const findInputTodo = inputTodo.find((todo) => {
    //   return todo.id === parseFloat(todoId);
    // });
    // findInputTodo.completed = true;
    dispatch({ type: "EDIT_COMPLETE", payload: { todos: { id: todoId } } });
    // window.localStorage.setItem("myTodos", JSON.stringify(inputTodo));
    // setTodoInput(JSON.parse(window.localStorage.getItem("myTodos")));
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
