import Task from "./Task";

export default function ShowProject({project,deletePrj}) {
  console.log(project)
  console.log("JSON"+JSON.stringify(project))
  return (
    <div className="flex flex-col h-screen">
      <section className="h-1/3 flex flex-col mt-6 gap-4">
        <div className=" flex flex-row">
          <h1 className="basis-4/5 text-black text-5xl font-semibold">
            {project.title}
          </h1>
          <button onClick={()=>deletePrj(project.key)} className="text-white bg-black basis-1/5 font-mono text-xl h-10 rounded-md m-2">
            Delete
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-xl basis-1/5 font-mono text-zinc-500 font-thin">
            {project.date}
          </h1>
          <h1 className="basis-4/5 text-xl font-mono text-zinc-700">
            {project.desc}
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
