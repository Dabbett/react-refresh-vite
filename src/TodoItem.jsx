/* eslint-disable react/prop-types */
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li
      className={`flex items-center justify-between p-2 rounded-lg shadow-md mb-2 ${completed ? 'bg-zinc-400' :  'bg-white'}`}
    >
      <label className={`flex items-center ${completed ? 'text-white' : "text-gray-900"}`}>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          className='mr-2'
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)} className={` border-solid border-2 rounded-xl p-1 ml-2 hover:bg-slate-600 hover:text-white ${completed ? 'text-white border-slate-100' : 'text-gray-900 border-slate-600'}`}
      >
        Delete
      </button>
    </li>
  );
}
