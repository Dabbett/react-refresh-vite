
export default function App() {
  return (
  <form className="bg-slate-200 h-screen px-8 py-8 text-3xl">
    <div className="">
      <label htmlFor=""> New Item</label>
      <input type="text" id="item"/>
    </div>
    <button className="bg-slate-600 rounded-full p-3"> Submit </button>
  </form>
  )
}
