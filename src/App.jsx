export default function App() {
  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 h-screen px-8 py-8 flex flex-col items-center ">
      <form className="bg-gray-400 p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="item" className="block text-gray-900 text-lg font-bold mb-2">New Item</label>
          <input type="text" id="item" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <button className="bg-slate-600 text-neutral-50 rounded-full py-2 px-4 hover:bg-slate-700">Submit</button>
      </form>

      <h1 className="text-2xl py-6 text-gray-800 font-bold">Todo List</h1>

      <ul className="w-full max-w-md">
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="item1" className="mr-2"/>
            <label htmlFor="item1" className="text-gray-900">Item 1</label>
          </div>
          <button className="border-solid border-2 rounded-xl border-slate-600 text-slate-600 p-1 ml-2 hover:bg-slate-600 hover:text-white">Delete</button>
        </li>
        <li className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="item2" className="mr-2"/>
            <label htmlFor="item2" className="text-gray-900">Item 2</label>
          </div>
          <button className="border-solid border-2 rounded-xl border-slate-600 text-slate-600 p-1 ml-2 hover:bg-slate-600 hover:text-white">Delete</button>
        </li>
      </ul>
    </div>
  );
}
