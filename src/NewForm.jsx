/* eslint-disable react/prop-types */
import { useState } from "react";


export function NewForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
    
        onSubmit(newItem)

        setNewItem('')
      }
    

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-400 p-6 rounded-lg shadow-md w-full max-w-md"
    >
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
  );
}

