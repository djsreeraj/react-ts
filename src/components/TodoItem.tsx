import { FC } from 'react';
import Todo from './../models/todo';
import classes from './TodoItem.module.css'

const TodoItem: FC<{ todo: Todo, onRemoveTodo: () => void }> = (props) => {
    return (
        <li className={classes.item} 
             onClick={props.onRemoveTodo} 
             key={props.todo.id}>{props.todo.text}
        </li>
    )
}

export default TodoItem;

