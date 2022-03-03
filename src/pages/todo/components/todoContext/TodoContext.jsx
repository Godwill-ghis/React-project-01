import { createContext } from "react";

const TodoContext = createContext();

export const TodoDispatchContext = createContext();
export const FilteredTodoContext = createContext();
export const FilteredTodoDispatchContext = createContext();

export default TodoContext;
