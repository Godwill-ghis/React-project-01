import React, { useContext } from "react";
import { FilteredTodoDispatchContext } from "./todoContext/TodoContext";

const FilterTodo = () => {
  const setFilterTodo = useContext(FilteredTodoDispatchContext).setFilterTodo;
  const handleFilter = (e) => {
    const todos = [...JSON.parse(window.localStorage.getItem("myTodos"))];
    let isCompleted;
    const update = todos.filter((todo) => {
      if (e.target.value === "completed") {
        isCompleted = true;
      } else if (e.target.value === "uncompleted") {
        isCompleted = false;
      } else {
        isCompleted = todo.completed;
      }
      return todo.completed === isCompleted;
    });
    setFilterTodo(update);
  };
  return (
    <>
      <select
        onChange={handleFilter}
        name='selectTodo'
        id='select'
        style={{ width: "102px", height: "30px" }}
      >
        <option selected>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
      </select>
    </>
  );
};

export default FilterTodo;
