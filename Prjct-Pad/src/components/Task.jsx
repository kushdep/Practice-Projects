export default function Task() {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col gap-5">
          <h1 className="text-black text-3xl  font-medium">Tasks</h1>
          <p className="mr-72">
            <input
              className="bg-stone-200 shadow-sm m-5 ml-0 mt-0 h-8 text-xl rounded-sm p-1"
              type="text"
            />
            <button className="text-black font-mono text-lg font-normal">
              Add Task
            </button>
          </p>
        </div>
      </section>
      <section className="flex flex-col">
        <ul className="grid grid-cols-2 gap-4">
          <div className="flex flex-row bg-stone-100 drop-shadow-md ">
            <li className="text-lg w-4/5 font-mono  p-2 flex flex-row">
              Module 1
            </li>
            <button className="w-1/5 text-lg font-mono">Clear</button>
          </div>
        </ul>
      </section>
    </>
  );
}
