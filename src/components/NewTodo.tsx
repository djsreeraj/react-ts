import { FC, FormEvent, useRef, useContext } from "react";
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context";

const NewTodo : FC = () => {
    const todosCtx = useContext(TodosContext);

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //throw an error
            return;
        }

        todosCtx.addTodo(enteredText);

        todoTextInputRef.current!.value = "";
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo:</label>
            <input type="text" name="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}


export default NewTodo;