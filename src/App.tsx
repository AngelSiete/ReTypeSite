import './App.css';
import Todos from './components/todos';
const dummyTodos = ['Learn React', 'Learn TypeScript', 'Learn JavaScript'];

function App() {
  return (
    <div className="App">
      <Todos items={dummyTodos} />
    </div>
  );
}

export default App;
