export default function Sidebar() {
  return (
    <div className="w-80 h-screen bg-black rounded-tr-lg mt-10">
      <h1 className="text-white tracking-tighter text-3xl font-bold text-left pl-7 pt-8">
        YOUR PROJECTS
      </h1>
      <button className="text-white bg-zinc-700 w-36 h-10 rounded-md m-8">
        + Add Project
      </button>
    </div>
  );
}
