export const initialState = {
  todos: [],
  filterTodos: null,
  isFiltered: false,
};
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      state.isFiltered = false;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            todoText: action.payload.todos.todoText,
            completed: false,
            id: action.payload.todos.id,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload.todos.id
        ),
      };
    case "EDIT_COMPLETE":
      const findtodo = state.todos.find(
        (todo) => todo.id === action.payload.todos.id
      );
      const newfind = state.todos.indexOf(findtodo);
      const update = { ...state.todos[newfind] };
      update.completed = true;
      state.todos[newfind] = update;
      return { ...state };
    case "DELETEFILTERED_TODO":
      if (state.filterTodos !== null) {
        return {
          ...state,
          filterTodos: state.filterTodos.filter(
            (todo) => todo.id !== action.payload.filterTodos.id
          ),
        };
      } else {
        return state;
      }
    case "EDITFILTEREDCOMPLETE_TODO":
      let isCompleted;
      state.isFiltered === false
        ? (state.isFiltered = true)
        : (state.isFiltered = true);
      const value = action.payload.filterTodos.complete;
      const filter = state.todos.filter((todo) => {
        if (value === "completed") {
          isCompleted = true;
        } else if (value === "uncompleted") {
          isCompleted = false;
        } else {
          isCompleted = todo.completed;
        }
        return todo.completed === isCompleted;
      });
      state.filterTodos = filter;
      return { ...state };

    case "IS_FILTERED":
      state.isFiltered = !state.isFiltered;
      return { ...state };
    case "CLEAR_TODO":
      state = initialState;
      return { ...state };

    default:
      return state;
  }
};

// export const filterTodoReducer = (state, action) => {
//   switch (action.type) {
//     case :
// return state.filter((todo) => {
//   let isCompleted;
//   const value = action.payload.isCompleted;
//   if (value === "completed") {
//     isCompleted = true;
//   } else if (value === "uncompleted") {
//     isCompleted = false;
//   } else {
//     isCompleted = todo.completed;
// }
//         return todo.completed === isCompleted;
//       });

//   return [...state, (action.completed = true)];
// default:
//   return state;
//   }
// };

export default todoReducer;
