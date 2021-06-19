import React, { useState } from "react";
import { FC } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo:() => {},
    removeTodo: (id: string) => {}
});

export const TodosContextProvider: FC = (props) => {
    
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);

      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo)
      })
  }

  const removeTodoHandler = (item: string) => {
    console.log('test');
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== item)
    });
  };

  const contextValue : TodosContextObj = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
  }

    return <TodosContext.Provider value={contextValue}> {props.children} </TodosContext.Provider>
}

export default TodosContextProvider;