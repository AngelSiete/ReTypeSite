import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/todos';
import Todo from './models/todo';
function App() {
  const todos = [new Todo('Learn React'), new Todo('Learn TypeScript'), new Todo('Learn JavaScript')];
  return (
    <div className="App">
      <Todos items={todos} />
      <NewTodo />
    </div>
  );
}

export default App;
