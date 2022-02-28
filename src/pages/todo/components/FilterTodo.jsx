import React from "react";

const FilterTodo = () => {
  return (
    <>
      <select
        name='selectTodo'
        id='select'
        style={{ width: "102px", height: "30px" }}
      >
        <option value='filter' defaultValue='Filter'>
          Filter
        </option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
      </select>
    </>
  );
};

export default FilterTodo;
