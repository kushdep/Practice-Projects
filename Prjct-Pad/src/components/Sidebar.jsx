export default function Sidebar({
  onChngAddPrjStt,
  addPrjvar,
  projects,
  openPrj,
  active,
}) {
  console.log("Sidebar " + JSON.stringify(projects));
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-white  tracking-tighter text-3xl font-bold text-left pl-7 pt-8">
          YOUR PROJECTS
        </h1>
        {!addPrjvar && (
          <button
            className="text-white font-mono bg-zinc-700 w-36 h-10 rounded-md m-8"
            onClick={onChngAddPrjStt}
          >
            + Add Project
          </button>
        )}
      </div>

      <ul className="flex flex-col gap-5">
        {projects.map((e) => (
          <li className="hover:bg-white">
            <button
              key={e.key}
              onClick={() => openPrj(e.key)}
              className="text-zinc-500 text-2xl text-left ml-10 font-mono "
            >
              {e.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
