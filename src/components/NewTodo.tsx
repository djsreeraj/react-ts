import { FC, FormEvent, useRef } from "react";

const NewTodo : FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if(enteredText.trim().length === 0){
            //throw an error
            return;
        }

        props.onAddtodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo:</label>
            <input type="text" name="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}


export default NewTodo;