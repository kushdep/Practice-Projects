export default function Task() {
  return (
    <>
      <section className="flex flex-col">
        <div className="flex flex-col gap-5">
        <h1 className="text-black text-3xl font-medium">Tasks</h1>
        <p className="mr-72">
          <input
            className="bg-stone-200 shadow-sm m-5 ml-0 mt-0 h-8 text-xl rounded-sm"
            type="text"
          />
          <button className="text-black text-lg font-normal">Add Task</button>
        </p>
        </div>
      </section>
      <section className="flex flex-col">
        <div></div>
      </section>
    </>
  );
}
