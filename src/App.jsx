export default function App() {
  return (
    <div className="bg-slate-200 h-screen px-8 py-8">
       <form className=" text-3xl">
    <div className="">
      <label htmlFor=""> New Item</label>
      <input type="text" id="item" />
    </div>
    <button className="bg-slate-600 rounded-full p-3"> Submit </button>
  </form>

  <h1 className="text-2xl py-6"> Todo List</h1>
 </div>
      
  );
}
