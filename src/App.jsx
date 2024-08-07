import { useEffect, useState } from "react";
import { NewForm } from "./NewForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
       setTodos((currentTodos) => {
          return [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
          ];
        });
  }

  

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => {
        return todo.id !== id
    })
    })
  }

  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 h-screen px-8 py-8 flex flex-col items-center ">
       
      <NewForm onSubmit={addTodo}/>
      <h1 className="text-2xl py-6 text-gray-800 font-bold">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      
    </div>
  );
}
