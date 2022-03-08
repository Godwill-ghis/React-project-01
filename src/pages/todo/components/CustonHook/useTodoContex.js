import TodoContext from "../todoContext/TodoContext";
import { useContext } from "react";

const useTodoContext = () => {
  return useContext(TodoContext);
};

export default useTodoContext;
