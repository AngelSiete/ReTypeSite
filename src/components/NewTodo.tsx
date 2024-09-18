import { useRef } from "react";

const NewTodo = () => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        
    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={textInputRef} required />
        </div>
        <button type="submit">Add Todo</button>
    </form>
  )
};

export default NewTodo;