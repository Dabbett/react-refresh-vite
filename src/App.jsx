import { useState } from "react";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
         { id: crypto.randomUUID(), title: newItem, completed: false},
        ]
    })

}




  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 h-screen px-8 py-8 flex flex-col items-center ">
      <form onSubmit={handleSubmit} className="bg-gray-400 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="item"
            className="block text-gray-900 text-lg font-bold mb-2"
          >
            New Item
          </label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button className="bg-slate-600 text-neutral-50 rounded-full py-2 px-4 hover:bg-slate-700">
          Submit
        </button>
      </form>

      <h1 className="text-2xl py-6 text-gray-800 font-bold">Todo List</h1>

      <ul className="w-full max-w-md">
        {todos.map(todo => {
          return(
            <li key={todo.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
              <label htmlFor="item2" className="text-gray-900">
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
            <button className="border-solid border-2 rounded-xl border-slate-600 text-slate-600 p-1 ml-2 hover:bg-slate-600 hover:text-white">
              Delete
            </button>
          </li>
          )
        })}
        
        
      </ul>
    </div>
  );
}
