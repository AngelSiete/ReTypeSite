import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';
    const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext);
    const textInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        };
        todosCtx.addTodo(enteredText);
        textInputRef.current!.value = '';
    }
    
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <div>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={textInputRef} required />
        </div>
        <button type="submit">Add Todo</button>
    </form>
  )
};

export default NewTodo;