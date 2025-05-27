export default function Sidebar({onChngAddPrjStt,addPrjvar}) {
  return (
    <div >
      <h1 className="text-white tracking-tighter text-3xl font-bold text-left pl-7 pt-8">
        YOUR PROJECTS
      </h1>
      {!addPrjvar &&<button className="text-white bg-zinc-700 w-36 h-10 rounded-md m-8" onClick={onChngAddPrjStt}>
        + Add Project
      </button>}
    </div>
  );
}
