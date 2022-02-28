import "./App.css";
import TodoCompotainer from "./pages/todo/components/TodoCompotainer";
import { useEffect, useState } from "react";

function App() {
  const myTodos = JSON.parse(window.localStorage.getItem("myTodos"));
  const [todoInput, setTodoInput] = useState(myTodos !== null ? myTodos : []);
  window.localStorage.setItem("myTodos", JSON.stringify(todoInput));

  const handleComplete = (e) => {
    const todoId = e.target.parentNode.parentNode.getAttribute("id");
    console.log(e.target.parentNode.parentNode.getAttribute("id"));
    const todos = JSON.parse(window.localStorage.getItem("myTodos"));
    console.log(todos);
    const todo = todos.find((todo) => todo.id === parseFloat(todoId));
    todo.completed = true;
    window.localStorage.setItem("myTodos", JSON.stringify(todos));
    setTodoInput(JSON.parse(window.localStorage.getItem("myTodos")));
  };

  useEffect(() => {}, []);
  const id = Math.floor(Math.random() * 100);
  const handleDeleteTodo = (e) => {
    const todo = e.target.parentNode.parentNode.parentNode.getAttribute("id");
    const update = todoInput.filter((element) => {
      return element.id !== parseFloat(todo);
    });
    window.localStorage.setItem("myTodos", JSON.stringify(update));
    setTodoInput(JSON.parse(window.localStorage.getItem("myTodos")));
  };
  function handleSubmit(e) {
    console.log(e.target);
    e.preventDefault();
    const todo = e.target.firstElementChild.value;
    const todos = [...todoInput, { todoText: todo, completed: false, id: id }];
    setTodoInput(todos);
    window.localStorage.setItem("myTodos", JSON.stringify(todoInput));
  }
  return (
    <div className='App'>
      <TodoCompotainer
        handleSubmit={handleSubmit}
        todoInput={todoInput}
        handleDeleteTodo={handleDeleteTodo}
        handleComplete={handleComplete}
      />
    </div>
  );
}

export default App;

const p = "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";
