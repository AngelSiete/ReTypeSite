import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/todos';
import Todo from './models/todo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
  
  return (
    <div className="App">
      <Todos items={todos} />
      <NewTodo onAddTodo={handleAddTodo} />
    </div>
  );
}

export default App;
