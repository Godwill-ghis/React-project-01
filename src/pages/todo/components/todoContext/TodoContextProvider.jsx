import React, { useEffect, useReducer, useState } from "react";
import TodoContext from "./TodoContext";
import axios from "../../../../api/axios";

import todoReducer, { initialState } from "../reducer/reducer";

const TodoContextProvider = ({ children }) => {
  const todos = JSON.parse(window.localStorage.getItem("myTODOS"));
  const [initialTodo, setInitialTodo] = useState();

  const [state, dispatch] = useReducer(
    todoReducer,
    todos ? todos : initialState
  );

  const todo = state.todos;
  const filterTodo = state.filterTodos;
  const isFiltered = state.isFiltered;
  useEffect(() => {
    window.localStorage.setItem("myTodos", JSON.stringify(state));
    const fetchtodo = async () => {
      axios
        .get("http://localhost:3001/todos/1")
        .then((response) => {
          console.log(response);
          console.log(response.status);
          setInitialTodo(response.data);
        })
        .catch((error) => console.log(error.message));
    };
    fetchtodo();
    console.log(initialTodo);
  }, []);

  return (
    <TodoContext.Provider value={{ todo, filterTodo, isFiltered, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
