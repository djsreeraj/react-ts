import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const todo = [
    new Todo('Learn JS'),
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ];

  const addTodoHandler = (todoText: string) => {

  }
  return (
    <div>
        <NewTodo onAddTodo={addTodoHandler}/>
        <Todos items = {todo}  />
    </div>
  );
}

export default App;
