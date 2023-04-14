import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState } from "react";

function App() {
  const currentDate = new Date();
  const [todos, setTodos] = useState([
    {
      text: "learn react",
      created: currentDate,
      isComplete: false,
    },
    {
      text: "meet friend for lunch",
      created: currentDate,
      isComplete: false,
    },
    {
      text: "build todo app",
      created: currentDate,
      isComplete: false,
    },
    {
      text: "become a react master",
      created: currentDate,
      isComplete: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      { text: text, created: new Date(), isComplete: false },
    ];
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <div>
        <div className="mt-6 flow-root">
          <ul role="list" className="-my-5 divide-y divide-gray-200">
            {todos.map((todo, i) => (
              <Todo index={i} key={i} todo={todo} remove={removeTodo} />
            ))}
          </ul>
        </div>
      </div>

      <div className="todo-list mt-10">
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
