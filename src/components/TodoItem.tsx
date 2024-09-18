import classes from './TodoItem.module.css';
const TodoItem: React.FC<{ text: string, id: string, onDeleteTodo: (id: string) => void }> = (props) => {
  return (
    <>
  <li className={classes.item}>{props.text}</li>
  <button onClick={() => props.onDeleteTodo(props.id)}>Delete</button>
  </>
);
};
export default TodoItem;