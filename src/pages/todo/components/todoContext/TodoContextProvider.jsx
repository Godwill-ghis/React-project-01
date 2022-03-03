import React, { useEffect, useState } from "react";
import TodoContext, {
  TodoDispatchContext,
  FilteredTodoDispatchContext,
  FilteredTodoContext,
} from "./TodoContext";

const TodoContextProvider = ({ children }) => {
  const todos = JSON.parse(window.localStorage.getItem("myTodos"));
  const [todo, setTodo] = useState(todos === null ? [] : todos);
  const [filterTodo, setFilterTodo] = useState(null);
  useEffect(
    () => window.localStorage.setItem("myTodos", JSON.stringify(todo)),
    [todo]
  );

  return (
    <TodoContext.Provider value={{ todo }}>
      <TodoDispatchContext.Provider value={{ setTodo }}>
        <FilteredTodoContext.Provider value={{ filterTodo }}>
          <FilteredTodoDispatchContext.Provider value={{ setFilterTodo }}>
            {children}
          </FilteredTodoDispatchContext.Provider>
        </FilteredTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
