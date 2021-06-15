import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const todo = [
    new Todo('Learn JS'),
    new Todo('Learn TS')
  ]
  return (
    <div>
        <Todos items = {todo}  />
    </div>
  );
}

export default App;
