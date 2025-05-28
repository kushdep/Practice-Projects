export default function Sidebar({ onChngAddPrjStt, addPrjvar, projectsTitle }) {
  console.log("Sidebar " + JSON.stringify(projectsTitle));
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-white tracking-tighter text-3xl font-bold text-left pl-7 pt-8">
          YOUR PROJECTS
        </h1>
        {!addPrjvar && (
          <button
            className="text-white bg-zinc-700 w-36 h-10 rounded-md m-8"
            onClick={onChngAddPrjStt}
          >
            + Add Project
          </button>
        )}
      </div>

      <div className="flex flex-col gap-5">
        {projectsTitle.map((e) => (
          <button className="text-zinc-500 text-xl text-left ml-10 h-10">
            {e.title}
          </button>
        ))}
      </div>
    </div>
  );
}
