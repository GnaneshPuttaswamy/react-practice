import "./App.css";
import TodoApp from "./components/TodoApp";
import { TodoProvider } from "./context/todo.context";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
