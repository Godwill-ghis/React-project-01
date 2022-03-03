import "./App.css";
import TodoCompotainer from "./pages/todo/components/TodoCompotainer";
import TodoContextProvider from "./pages/todo/components/todoContext/TodoContextProvider";

function App() {
  return (
    <div className='App'>
      <TodoContextProvider>
        <TodoCompotainer />
      </TodoContextProvider>
    </div>
  );
}

export default App;

// const p = "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";
