import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todos-context';

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
        <TodoItem key={item.id} id={item.id} text={item.text} onDeleteTodo={todosCtx.removeTodo} />
      ))}
    </ul>
  );
};
export default Todos;
