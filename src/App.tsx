import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);

      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo)
      })
  }

  const removeTodoHandler = (item: string) => {
    // let list = todos;
    // list.slice(list.findIndex(x => x.id === item),1);
    // setTodos(list);    
    console.log('test');
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== item)
    });
  };

  return (
    <div>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items = {todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
