export default function DefaultPage({ chngState }) {
  return (
    <div className=" flex flex-col items-center gap-3 m-52 ml-60">
      <img src="/logo.png" className="w-32" />
      <h1 className="text-center font-bold text-xl text-zinc-700 ">
        No Project Selected
      </h1>
      <h1 className="text-center font-light text-xl text-zinc-700 ">
        Select a project or get started with a new one
      </h1>
      <button
        onClick={chngState}
        className="text-white bg-zinc-700 w-40 h-10 rounded-md m-8 "
      >
        Create New Project
      </button>
    </div>
  );
}
