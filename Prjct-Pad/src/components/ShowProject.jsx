import Task from "./Task";

export default function ShowProject() {
  return (
    <div className="flex flex-col h-screen">
      <section className="h-1/3 flex flex-col mt-6 gap-4">
        <div className=" flex flex-row">
          <h1 className="basis-4/5 text-black text-5xl font-semibold">
            Learning React
          </h1>
          <button className="text-black basis-1/5 text-xl w-20 h-10 rounded-md m-2">
            Delete
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl basis-1/5 text-zinc-500 font-thin">
            Dec 29,2024
          </h1>
          <h1 className="basis-4/5 text-xl text-zinc-700">
            Practice Practice Practice!!
          </h1>
        </div>
      </section>
      <hr className="my-4 border-t-2 border-zinc-300 rounded-full mr-60" />
      <section className="h-3/5 ">
        <Task />
      </section>
    </div>
  );
}
