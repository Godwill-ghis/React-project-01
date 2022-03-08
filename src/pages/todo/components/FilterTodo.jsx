import React from "react";
import useTodoContext from "./CustonHook/useTodoContex";

const FilterTodo = () => {
  const { dispatch } = useTodoContext();
  const handleFilter = (e) => {
    const complete = e.target.value;
    dispatch({
      type: "EDITFILTEREDCOMPLETE_TODO",
      payload: {
        filterTodos: { complete: complete },
      },
    });
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
